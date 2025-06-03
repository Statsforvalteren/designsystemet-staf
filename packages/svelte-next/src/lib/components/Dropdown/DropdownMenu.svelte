<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { Button, ParagraphWrapper } from '$lib/index.js';
  import Divider from './Divider.svelte';
  import type { Snippet } from 'svelte';

  //dropdown:
  export type MenuItem = {
    text: string; // Teksten som vises i MenuItem
    onClick?: (event: Event) => void; // Funksjonen som skal kjøres ved klikk, valgfri
    href?: string; // URL for lenken, valgfri
    target?: string; // Mål for lenken, valgfri
    iconComponent?: any; // Ikonkomponent, valgfri
  };

  // Definerer en type for MenuGroup
  export type MenuGroup = {
    heading?: string; // Overskriften til gruppen, valgfri
    items: MenuItem[]; // Liste over MenuItem objekter
  };

  let {
    buttonContent,
    menuGroups = [],
    placement = 'bottom-start',
    size = 'medium',
    gap = 0,
    onClose = () => {},
  }: {
    buttonContent: Snippet;
    menuGroups: MenuGroup[];
    placement: string;
    size: string;
    gap: number;
    onClose: () => void;
  } = $props();

  let containerRef: HTMLElement | null = null;

  const uniqueId = `dropdownMenu-${uuidv4()}`;
  let standardizedSize = $state('md');

  $effect(() => {
    const newSize =
      size === 'small' || size === 'sm'
        ? 'sm'
        : size === 'large' || size === 'lg'
          ? 'lg'
          : 'md';
    standardizedSize = newSize;
  });

  let menuVisible = $state(false);
  let top = $state(0);
  let left = $state(0);
  let dropdown: HTMLElement | null = null;

  function runTrigger(e: MouseEvent) {
    e.stopPropagation();
    console.log('runTrigger called');
    menuVisible = !menuVisible;
    if (menuVisible) {
      setPlacement();
    } else {
      console.log('onClose called');
      onClose();
    }
  }

  function onWindowClick(e: MouseEvent) {
    console.log('onWindowClick called');
    if (!menuVisible) return;
    if (
      dropdown &&
      containerRef &&
      !dropdown.contains(e.target as Node) &&
      !containerRef.contains(e.target as Node)
    ) {
      menuVisible = false;
      onClose();
    }
  }

  function setPlacement() {
    if (containerRef && dropdown) {
      const rect = containerRef
        .querySelector('button')
        ?.getBoundingClientRect();
      if (!rect) return;
      const dropdownRect = dropdown.getBoundingClientRect();
      switch (placement) {
        case 'bottom-start':
          top = rect.height + gap;
          left = 0;
          break;
        case 'bottom-end':
          top = rect.height + gap;
          left = rect.width - dropdownRect.width;
          break;
        case 'bottom':
          top = rect.height + gap;
          left = rect.width / 2 - dropdownRect.width / 2;
          break;
        case 'top':
          top = -dropdownRect.height - gap;
          left = rect.width / 2 - dropdownRect.width / 2;
          break;
        case 'top-start':
          top = -dropdownRect.height - gap;
          left = 0;
          break;
        case 'top-end':
          top = -dropdownRect.height - gap;
          left = rect.width - dropdownRect.width;
          break;
        case 'left':
          top = rect.height / 2 - dropdownRect.height / 2;
          left = -dropdownRect.width - gap;
          break;
        case 'right':
          top = rect.height / 2 - dropdownRect.height / 2;
          left = rect.width + gap;
          break;
        case 'right-start':
          top = 0;
          left = rect.width + gap;
          break;
        case 'right-end':
          top = rect.height - dropdownRect.height;
          left = rect.width + gap;
          break;
        case 'left-start':
          top = 0;
          left = -dropdownRect.width - gap;
          break;
        case 'left-end':
          top = rect.height - dropdownRect.height;
          left = -dropdownRect.width - gap;
          break;
      }
    }
  }
</script>

<svelte:window onclick={onWindowClick} />
{#snippet menuSnippet(d: MenuGroup[])}
  <li>
    {#each d as menuGroup, index (menuGroup)}
      <ul
        class="ds-dropdownmenu__section"
        {...menuGroup.heading
          ? {
              'aria-labelledby': `dropdownMenu-${uuidv4()}-dropdown-menu-group`,
            }
          : {}}
        role="group"
      >
        {#if menuGroup.heading}
          <ParagraphWrapper {size}>
            <h2
              class="ds-dropdownmenu__heading"
              id={`dropdownMenu-${uuidv4()}-dropdown-menu-group`}
            >
              {menuGroup.heading}
            </h2>
          </ParagraphWrapper>
        {/if}
        {#each menuGroup.items as item (item.text)}
          <li>
            <Button
              href={item.href}
              target={item.target}
              {size}
              fullWidth
              variant="tertiary"
              style="justify-content: start;"
              onclick={(e) => {
                e.preventDefault();
                item.onClick?.(e);
                if (item.href) {
                  window.open(item.href, item.target);
                }
              }}
            >
              {#snippet content()}
                {#if item.iconComponent}
                  <div class="icon {size}">
                    {#if item.iconComponent}
                      <item.iconComponent height={24} width={24} />
                    {/if}
                  </div>
                {/if}
                {item.text}
              {/snippet}
            </Button>
          </li>
        {/each}
        {#if index < d.length - 1}
          <Divider />
        {/if}
      </ul>
    {/each}
  </li>
{/snippet}

<div class="ds-dropdown-container" bind:this={containerRef}>
  <Button onclick={runTrigger}
    >{#snippet content()}{@render buttonContent?.()}{/snippet}</Button
  >

  <ul
    id={uniqueId}
    role="menu"
    bind:this={dropdown}
    class={`ds-dropdownmenu ds-dropdownmenu--${standardizedSize}`}
    style="top:{top}px; left:{left}px; {menuVisible
      ? 'visibility:visible;'
      : 'visibility:hidden;'}"
    onclick={(event) => {
      event.stopPropagation();
    }}
    onkeydown={(event) => {
      if (event.key === 'Escape') {
        menuVisible = false;
        onClose();
      }
    }}
    tabindex="0"
  >
    {@render menuSnippet?.(menuGroups)}
  </ul>
</div>

<style>
  .ds-dropdown-container {
    position: relative;
    display: inline-block;
  }

  .ds-dropdownmenu {
    position: absolute;
    padding: var(--ds-spacing-2);
    z-index: 1500;
    margin: 0;
    list-style: none;
    border-radius: var(--ds-border-radius-md);
    box-shadow: var(--ds-shadow-md);
    background-color: var(--ds-color-neutral-background-default);
    border: 1px solid var(--ds-color-neutral-border-subtle);
  }

  .ds-dropdownmenu--sm {
    min-width: 240px;
    padding: var(--ds-spacing-2);
  }

  .ds-dropdownmenu--md {
    min-width: 260px;
    padding: var(--ds-spacing-3) var(--ds-spacing-2);
  }

  .ds-dropdownmenu--lg {
    min-width: 280px;
    padding: var(--ds-spacing-4) var(--ds-spacing-2);
  }

  .ds-dropdownmenu__section {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ds-dropdownmenu__heading {
    padding: var(--ds-spacing-2) var(--ds-spacing-4);
    margin: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-semantic-surface-action-default, '#00244E');
    height: 1.25rem;
    width: 1.25rem;
  }
  .icon.sm {
    height: var(--fds-sizing-4);
    width: var(--fds-sizing-4);
  }
  .icon.md {
    height: var(--fds-sizing-6);
    width: var(--fds-sizing-6);
  }
  .icon.lg {
    height: var(--fds-sizing-8);
    width: var(--fds-sizing-8);
  }
</style>
