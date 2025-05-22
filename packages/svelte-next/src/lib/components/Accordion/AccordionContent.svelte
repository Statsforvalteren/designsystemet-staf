<script>
  import { getContext } from 'svelte';
  import { slide } from 'svelte/transition';
  const accordionItemContext = getContext('accordionItem');

  let { content } = $props();

  if (!accordionItemContext) {
    console.error(
      '<AccordionContent> has to be used within an <AccordionItem>',
    );
  }
</script>

{#if accordionItemContext?.open}
  <div class="ds-accordion__content" transition:slide|local>
    {@render content?.()}
  </div>
{/if}

<style>
  .ds-accordion__content {
    padding: var(--ds-spacing-5, 1rem);
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
