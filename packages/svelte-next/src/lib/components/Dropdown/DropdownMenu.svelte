<script>
  import { run } from 'svelte/legacy';

  import { onMount, setContext } from 'svelte';
  import MenuGroup from './DropdownMenuGroup.svelte';
  import MenuItem from './DropdownMenuItem.svelte';
  import Divider from './Divider.svelte';
  import { v4 as uuidv4 } from 'uuid';

  const C = {
    MenuGroup,
    MenuItem,
    Divider,
  };

  

  

  

  

  
  /** @type {{onClose?: any, placement?: string, size?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg', anchorEl?: HTMLElement, gap?: number, children?: import('svelte').Snippet<[any]>}} */
  let {
    onClose = () => {},
    placement = 'bottom-start',
    size = 'medium',
    anchorEl = null,
    gap = 0,
    children
  } = $props();

  const uniqueId = `dropdownMenu-${uuidv4()}`;
  let standardizedSize = $state();

  switch (size) {
    case 'small':
    case 'sm':
      standardizedSize = 'sm';
      break;
    case 'medium':
    case 'md':
      standardizedSize = 'md';
      break;
    case 'large':
    case 'lg':
      standardizedSize = 'lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }

  let menuVisible;
  run(() => {
    menuVisible = false;
  });

  onMount(() => {
    if (anchorEl) {
      anchorEl.addEventListener('click', runTrigger);
    }

    return () => {
      anchorEl.removeEventListener('click', runTrigger);
    };
  });

  function runTrigger() {
    setPlacement();
    menuVisible = !menuVisible;
    if (!menuVisible) {
      onClose();
    }
  }
  let parentProps = { standardizedSize };
  let top = $state(0);
  let left = $state(0);
  let dropdown = $state(null);
  setContext('parentProps', parentProps);

  function onWindowClick(e) {
    if (menuVisible == false) return;
    if (
      dropdown.contains(e.target) == false &&
      anchorEl.contains(e.target) == false
    ) {
      menuVisible = false;
      onClose();
    }
  }

  function setPlacement() {
    if (anchorEl) {
      let rect = anchorEl.getBoundingClientRect();
      if (placement == 'bottom-start') {
        top = rect.height + gap;
        left = 0;
      } else if (placement == 'bottom-end') {
        top = rect.height + gap;
        left = rect.width - dropdown.getBoundingClientRect().width;
      } else if (placement == 'bottom') {
        top = rect.height + gap;
        left = rect.width / 2 - dropdown.getBoundingClientRect().width / 2;
      } else if (placement == 'top') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = rect.width / 2 - dropdown.getBoundingClientRect().width / 2;
      } else if (placement == 'top-start') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = 0;
      } else if (placement == 'top-end') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = rect.width - dropdown.getBoundingClientRect().width;
      } else if (placement == 'left') {
        top = rect.height / 2 - dropdown.getBoundingClientRect().height / 2;
        left = -dropdown.getBoundingClientRect().width - gap;
      } else if (placement == 'right') {
        top = rect.height / 2 - dropdown.getBoundingClientRect().height / 2;
        left = rect.width + gap;
      } else if (placement == 'right-start') {
        top = 0;
        left = rect.width + gap;
      } else if (placement == 'right-end') {
        top = rect.height - dropdown.getBoundingClientRect().height;
        left = rect.width + gap;
      } else if (placement == 'left-start') {
        top = 0;
        left = -dropdown.getBoundingClientRect().width - gap;
      } else if (placement == 'left-end') {
        top = rect.height - dropdown.getBoundingClientRect().height;
        left = -dropdown.getBoundingClientRect().width - gap;
      }
    }
  }
</script>

<svelte:window onclick={onWindowClick} />

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
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
>
  {@render children?.({ C, })}
</ul>

<style>
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
</style>
