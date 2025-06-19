<script lang="ts">
  import { getContext } from 'svelte';

  /** @type {{level?: number}} */
  let { level = 1, header, ...rest } = $props();

  type AccordionContext = {
    color: string;
    border?: boolean;
  };
  const accordionContext = getContext<AccordionContext>('accordion');

  type AccordionItemContext = {
    open: boolean;
    toggleOpen: () => void;
    contentId: string;
  };

  const accordionItemContext =
    getContext<AccordionItemContext>('accordionItem');

  if (!accordionItemContext) {
    console.error(
      '<Accordion.Header> has to be used within an <Accordion.Item>',
    );
  }
  const handleClick = () => {
    if (accordionItemContext) {
      accordionItemContext.toggleOpen();
    }
  };
</script>

<svelte:element
  this={`h${level}`}
  class="ds-accordion__header"
  style={`${level == 1 ? 'border-top: none;' : ''}`}
>
  <button
    type="button"
    class={`ds-accordion__button ds-focus ${accordionContext.color}`}
    class:open={accordionItemContext.open}
    class:border={accordionContext.border}
    onclick={handleClick}
    aria-expanded={accordionItemContext.open}
    aria-controls={accordionItemContext.contentId}
    {...rest}
  >
    <!-- <slot name="header" /> -->
    {@render header?.()}
    <div aria-hidden="true" class="ds-accordion__expand-icon">
      {#if !accordionItemContext.open}
        <svg
          width="1.6em"
          height="1.5em"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z"
            fill="currentColor"
          />
        </svg>
      {:else}
        <svg
          width="1.6em"
          height="1.5em"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06l5.5-5.5Z"
            fill="currentColor"
          />
        </svg>
      {/if}
    </div>
  </button>
</svelte:element>

<style>
  .ds-accordion__header {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--ds-spacing-2);
    text-align: left;
    border: none;
    border-top: 1px solid var(--dsc-accordion-border-color);
    background-color: var(--dsc-accordion-button-background);
  }

  .ds-accordion__button {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--ds-spacing-2);
    margin: 0;
    padding: var(--ds-spacing-4);
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
  }

  .ds-accordion__expand-icon {
    border-radius: var(--ds-border-radius-md);
    color: var(--ds-color-neutral-text-default);
  }

  @media (hover: hover) and (pointer: fine) {
    .ds-accordion__header:hover .ds-accordion__expand-icon {
      background-color: var(--dsc-accordion-icon-background-hover);
    }
    .ds-accordion__header:hover {
      background-color: var(--dsc-accordion-background-hover);
    }
  }

  .ds-accordion__item:where(.ds-accordion__item--open)
    .ds-accordion__expand-icon {
    transform: rotateZ(180deg);
  }
</style>
