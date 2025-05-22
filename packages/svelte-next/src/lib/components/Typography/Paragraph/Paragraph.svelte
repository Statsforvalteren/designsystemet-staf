<script>
  import ParagraphWrapper from './ParagraphWrapper.svelte';

  

  

  

  

  
  /** @type {{as?: 'p' | 'span' | 'div', size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg', spacing?: boolean, variant?: 'long' | 'short', class_?: string, children?: import('svelte').Snippet}} */
  let {
    as = 'p',
    size = 'medium',
    spacing = false,
    variant = 'short',
    class_ = '',
    children
  } = $props();

  let computedClass = $derived([
    'ds-paragraph',
    spacing ? 'ds-paragraph--spacing' : '',
    class_ || '',
  ]
    .filter(Boolean)
    .join(' '));
</script>

<ParagraphWrapper {size} {variant}>
  {#if as === 'p'}
    <p class={computedClass}>
      {@render children?.()}
    </p>
  {:else if as === 'span'}
    <span class={computedClass}>
      {@render children?.()}
    </span>
  {:else}
    <div class={computedClass}>
      {@render children?.()}
    </div>
  {/if}
</ParagraphWrapper>

<style>
  :global(.ds-paragraph) {
    --dsc-bottom-spacing: var(--ds-spacing-5);

    color: var(--ds-color-neutral-text-default);
    margin: 0;
  }

  .ds-paragraph--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }
</style>
