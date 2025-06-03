<script>
  

  
  /** @type {{size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg', variant?: 'long' | 'short', children?: import('svelte').Snippet}} */
  let { size = 'medium', variant = 'short', children } = $props();

  let standardizedSize = $state();

  switch (size) {
    case 'xsmall':
    case 'xs':
      standardizedSize = 'xs';
      break;
    case 'small':
    case 'sm':
      standardizedSize = 'sm';
      break;
    case 'medium':
    case 'md':
      standardizedSize = 'md';
      break;
    case 'large':
    case 'lg':
      standardizedSize = 'lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }
</script>

<div class={`ds-paragraph--${standardizedSize} ds-paragraph--${variant}`}>
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
