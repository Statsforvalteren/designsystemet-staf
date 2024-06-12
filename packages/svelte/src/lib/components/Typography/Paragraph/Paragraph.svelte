<script>
  /**
   * The type of element to render. Default is 'p'.
   * @type {string}
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
    `ds-paragraph--${size}`,
    spacing ? 'ds-paragraph--spacing' : '',
    `ds-paragraph--${variant}`,
    $$props.class || '',
  ]
    .filter(Boolean)
    .join(' ');
</script>

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

<style>
  :global(.ds-paragraph) {
    --dsc-bottom-spacing: var(--ds-spacing-5);

    color: var(--ds-color-neutral-text-default);
    margin: 0;
  }

  .ds-paragraph--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }

  .ds-paragraph--lg {
    --dsc-bottom-spacing: var(--ds-spacing-6);

    font: var(--ds-typography-paragraph-lg);
    font-family: inherit;
  }

  .ds-paragraph--lg.ds-paragraph--short {
    font: var(--ds-typography-paragraph-short-lg);
    font-family: inherit;
  }

  .ds-paragraph--lg.ds-paragraph--long {
    line-height: var(--ds-typography-paragraph-long-lg);
  }

  .ds-paragraph--md {
    --dsc-bottom-spacing: var(--ds-spacing-5);

    font: var(--ds-typography-paragraph-md);
    font-family: inherit;
  }

  .ds-paragraph--md.ds-paragraph--short {
    --dsc-bottom-spacing: var(--ds-spacing-5);

    font: var(--ds-typography-paragraph-short-md);
    font-family: inherit;
  }

  .ds-paragraph--md.ds-paragraph--long {
    line-height: var(--ds-typography-paragraph-long-md);
  }

  .ds-paragraph--sm {
    --dsc-bottom-spacing: var(--ds-spacing-4);

    font: var(--ds-typography-paragraph-sm);
    font-family: inherit;
  }

  .ds-paragraph--sm.ds-paragraph--short {
    --dsc-bottom-spacing: var(--ds-spacing-4);

    font: var(--ds-typography-paragraph-short-sm);
    font-family: inherit;
  }

  .ds-paragraph--sm.ds-paragraph--long {
    line-height: var(--ds-typography-paragraph-long-sm);
  }

  .ds-paragraph--xs {
    --dsc-bottom-spacing: var(--ds-spacing-3);

    font: var(--ds-typography-paragraph-xs);
    font-family: inherit;
  }

  .ds-paragraph--xs.ds-paragraph--short {
    --dsc-bottom-spacing: var(--ds-spacing-3);

    font: var(--ds-typography-paragraph-short-xs);
    font-family: inherit;
  }

  .ds-paragraph--xs.ds-paragraph--long {
    line-height: var(--ds-typography-paragraph-long-xs);
  }
</style>
