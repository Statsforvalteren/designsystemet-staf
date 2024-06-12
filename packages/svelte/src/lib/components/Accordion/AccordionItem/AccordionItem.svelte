<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uuidv4 } from 'uuid';

  export let open = writable(undefined);
  export let defaultOpen = false;

  let internalOpen = writable(defaultOpen);
  let contentId = uuidv4();
  const dispatch = createEventDispatcher();

  const toggleOpen = () => {
    if (open === undefined) {
      internalOpen.update((iOpen) => !iOpen);
    }
    $open = !$open;
    dispatch('toggleOpen');
  };

  setContext('accordionItem', {
    open: open ?? $internalOpen,
    toggleOpen,
    contentId,
  });
</script>

<div
  class={`ds-accordion__item ${
    open || internalOpen ? 'ds-accordion__item--open' : ''
  }`}
>
  <slot />
</div>

<style>
  .ds-accordion__item--open .ds-accordion__header {
    background-color: var(--dsc-accordion-button-background-open);
  }

  .ds-accordion__item:focus-within {
    position: relative;
  }

  .ds-accordion__item:where(.ds-accordion__item--open)
    .ds-accordion__expand-icon {
    transform: rotateZ(180deg);
  }

  .ds-accordion__item:not(:first-child) .ds-accordion__header {
    border-top: 1px solid var(--dsc-accordion-border-color);
  }

  .ds-accordion--border .ds-accordion__item:first-child .ds-accordion__header {
    border-top: 0;
  }

  .ds-accordion--border
    .ds-accordion__item:first-of-type
    .ds-accordion__header:first-of-type {
    border-top-left-radius: var(--dsc-accordion-border-radius);
    border-top-right-radius: var(--dsc-accordion-border-radius);
  }

  .ds-accordion--border
    .ds-accordion__item:last-of-type:not(.ds-accordion__item--open)
    .ds-accordion__header:first-of-type {
    border-bottom-left-radius: var(--dsc-accordion-border-radius);
    border-bottom-right-radius: var(--dsc-accordion-border-radius);
  }

  @media (hover: hover) and (pointer: fine) {
    .ds-accordion__item--open
      .ds-accordion__header:hover
      .ds-accordion__expand-icon {
      background-color: var(--dsc-accordion-icon-background-active);
    }
  }
</style>
