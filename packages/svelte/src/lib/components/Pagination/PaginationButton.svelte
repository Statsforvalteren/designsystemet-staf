<script>
  import Button from '../Button/Button.svelte';

  /**
   * Toggle button as active
   * @default false
   */
  export let isActive = false;

  /**
   * Sets the size of the pagination-component.
   * @type {'sm' | 'md' | 'lg'}
   */
  export let size = 'md';

  /**
   * Default aria-label for the button when a slot is provided.
   * @type {string}
   */
  export let ariaLabel = '';

  /**
   * On click handler.
   * @type {() => void}
   */
  export let onClick = () => {};
</script>

<Button
  {...$$restProps}
  aria-current={isActive}
  aria-label={$$slots.default != null ? undefined : ariaLabel}
  {size}
  variant={isActive ? 'primary' : 'tertiary'}
  on:click={onClick}
>
  <slot />
</Button>
