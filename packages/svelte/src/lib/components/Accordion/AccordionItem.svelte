<script>
  // @ts-nocheck

  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uuidv4 } from 'uuid';

  /**
   * Specify if the accordion item is open or closed on rendering.
   * @type {writeable<boolean>}
   */
  export let open = writable(undefined);

  /**
   * Fallback state for defining if the accordion item is open or closed.
   * @type {boolean}
   */
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
  .ds-accordion__item:focus-within {
    position: relative;
  }
</style>
