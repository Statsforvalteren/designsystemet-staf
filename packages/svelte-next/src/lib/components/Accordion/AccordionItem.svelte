<script>
  // @ts-nocheck

  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uuidv4 } from 'uuid';

  let { open = writable(false), defaultOpen = false, children } = $props();

  // Create a single source of truth for open state
  let isOpen = $state(defaultOpen || open);
  let contentId = uuidv4();
  const dispatch = createEventDispatcher();

  // Toggle state function
  const toggleOpen = () => {
    isOpen = !isOpen;
    dispatch('toggleOpen', { isOpen });
  };

  // Context for child components
  const itemContext = {
    get open() {
      return isOpen;
    },
    toggleOpen,
    contentId,
  };

  setContext('accordionItem', itemContext);
</script>

<div class={`ds-accordion__item ${isOpen ? 'ds-accordion__item--open' : ''}`}>
  {@render children?.()}
</div>

<style>
  .ds-accordion__item:focus-within {
    position: relative;
  }
</style>
