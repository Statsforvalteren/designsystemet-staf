<script>
  import { ParagraphWrapper } from '../..';

  /**
   * List component to render a list.
   * @prop {string} [as='ul'] - The HTML element to render the component as.
   * @type { 'ul' | 'ol' | 'none' }
   */
  export let as = 'ul';

  /**
   * Additional classes to add to the component.
   * @type {string}
   */
  export let className = '';

  /**
   * Controls the size (padding) of the List.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  let standardizedSize;

  switch (size) {
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

  $: listClasses = `ds-list ds-list--${standardizedSize} ${className}`;
</script>

<ParagraphWrapper {size}>
  {#if as === 'ul'}
    <div style="text-align: center">
      <ul class={listClasses} {...$$restProps}>
        <slot />
      </ul>
    </div>
  {/if}

  {#if as === 'ol'}
    <ol class={listClasses} {...$$restProps}>
      <slot />
    </ol>
  {/if}

  {#if as === 'none'}
    <ul class={`none ${listClasses}`} {...$$restProps}>
      <slot class="none" />
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
  .none {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>
