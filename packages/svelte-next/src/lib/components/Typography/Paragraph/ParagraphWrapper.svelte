<script lang="ts">
  type paragraphPropTypes = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'long' | 'short';
    children?: () => any;
  };

  let {
    size = 'md',
    variant = 'short',
    children,
  }: paragraphPropTypes = $props();
</script>

<div class={`ds-paragraph--${size} ds-paragraph--${variant}`}>
  {@render children?.()}
</div>

<style>
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
