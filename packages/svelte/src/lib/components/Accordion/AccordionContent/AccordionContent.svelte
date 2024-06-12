<script>
  import { getContext } from 'svelte';
  import { slide } from 'svelte/transition';

  let open = null;

  $: {
    try {
      open = getContext('accordionItem').open;
    } catch {
      console.error(
        '<AccordionContent> has to be used within an <AccordionItem>'
      );
    }
  }
</script>

{#if $open}
  <div class="ds-accordion__content" transition:slide|local>
    {#if $$slots.content}
      <slot name="content" />
    {/if}
  </div>
{/if}

<style>
  .ds-accordion__content {
    padding: var(--ds-spacing-5, 1rem);
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
