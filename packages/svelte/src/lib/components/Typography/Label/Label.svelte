<script>
  /**
   * The type of element to render.
   * @type {string}
   */
  export let as = 'p';
  /**
   * Defines the size of the spacing after the heading. Must be used in conjunction with the `spacing` prop.
   * @type {'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * Adds margin-bottom. Must be used in conjunction with the `size` prop.
   * @type {boolean}
   */
  export let spacing = false;

  /**
   * Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset.
   * @type {'regular' | 'medium' | 'semibold'}
   */
  export let weight;

  /**
   * Additional classes to add to the component.
   * @type {string}
   */
  export let className = '';

  let standardizedSize;

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

  $: computedClass = [
    'ds-label',
    `ds-label--${standardizedSize}`,
    spacing ? 'ds-label--spacing' : '',
    weight ? `ds-label--${weight}-weight` : '',
    className,
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
