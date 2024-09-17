<script>
  import ParagraphWrapper from './ParagraphWrapper.svelte';

  /**
   * The type of element to render.
   * @type {'p' | 'span' | 'div'}
   */
  export let as = 'p';

  /**
   * Size of the paragraph.
   * @type {'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * Adds margin-bottom.
   * @type {boolean}
   */
  export let spacing = false;

  /**
   * Adjusts styling for paragraph length.
   * @type {'long' | 'short'}
   */
  export let variant = 'short';

  $: computedClass = [
    'ds-paragraph',
    spacing ? 'ds-paragraph--spacing' : '',
    $$props.class || '',
  ]
    .filter(Boolean)
    .join(' ');
</script>

<ParagraphWrapper {size} {variant}>
  {#if as === 'p'}
    <p class={computedClass}>
      <slot />
    </p>
  {:else if as === 'span'}
    <span class={computedClass}>
      <slot />
    </span>
  {:else}
    <div class={computedClass}>
      <slot />
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
