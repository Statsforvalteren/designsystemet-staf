<script lang="ts">
  type labelPropTypes = {
    as?: 'p' | 'span' | 'div';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    spacing?: boolean;
    weight: 'regular' | 'medium' | 'semibold';
    className?: string;
    children?: () => any;
  };

  let {
    as = 'p',
    size = 'md',
    spacing = false,
    weight,
    className = '',
    children,
  }: labelPropTypes = $props();

  let standardizedSize = $state();

  switch (size) {
    case 'xs':
      standardizedSize = 'xs';
      break;
    case 'sm':
      standardizedSize = 'sm';
      break;
    case 'md':
      standardizedSize = 'md';
      break;
    case 'lg':
      standardizedSize = 'lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }

  let computedClass = $derived(
    [
      'ds-label',
      `ds-label--${standardizedSize}`,
      spacing ? 'ds-label--spacing' : '',
      weight ? `ds-label--${weight}-weight` : '',
      className,
    ]
      .filter(Boolean)
      .join(' '),
  );
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
