<script>
  
  

  

  

  
  /** @type {{as?: string, size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg', spacing?: boolean, weight: 'regular' | 'medium' | 'semibold', className?: string, children?: import('svelte').Snippet}} */
  let {
    as = 'p',
    size = 'medium',
    spacing = false,
    weight,
    className = '',
    children
  } = $props();

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

  let computedClass = $derived([
    'ds-label',
    `ds-label--${standardizedSize}`,
    spacing ? 'ds-label--spacing' : '',
    weight ? `ds-label--${weight}-weight` : '',
    className,
  ]
    .filter(Boolean)
    .join(' '));
</script>

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

<style>
  .ds-label {
    --dsc-bottom-spacing: var(--ds-spacing-1);

    display: inline-block;
    margin: 0;
    padding: 0;
    color: var(--ds-color-neutral-text-default);
  }

  .ds-label--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }

  .ds-label--regular-weight {
    font-weight: 400;
  }

  .ds-label--medium-weight {
    font-weight: 500;
  }

  .ds-label--semibold-weight {
    font-weight: 600;
  }
</style>
