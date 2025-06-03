<script lang="ts">
  import { ParagraphWrapper } from '../../index.js';

  let {
    as = 'ul',
    class_ = '',
    size = 'medium',
    children,
  } = $props();

  let standardizedSize = $state('md');
  
  $effect(() => {
    if (size === 'small' || size === 'sm') standardizedSize = 'sm';
    else if (size === 'large' || size === 'lg') standardizedSize = 'lg';
    else standardizedSize = 'md';
  });

  let baseClasses = $derived(['ds-list', `ds-list--${standardizedSize}`, class_]);
  let listClasses = $derived(baseClasses.filter(Boolean).join(' '));
  let noneClasses = $derived([...baseClasses, 'ds-list--none'].filter(Boolean).join(' '));
</script>

<ParagraphWrapper {size}>
  {#if as === 'ul'}
    <ul class={listClasses}>
      {@render children?.()}
    </ul>
  {/if}

  {#if as === 'ol'}
    <ol class={listClasses}>
      {@render children?.()}
    </ol>
  {/if}

  {#if as === 'none'}
    <ul class={noneClasses}>
      {@render children?.()}
    </ul>
  {/if}
</ParagraphWrapper>

<style>
  .ds-list--sm {
    padding-left: var(--ds-spacing-4);
  }

  .ds-list--md,
  .ds-list--lg {
    padding-left: var(--ds-spacing-6);
  }

  .ds-list--none {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>
