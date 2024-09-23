<script>
  /**
   * Sets the size of the pagination-component.
   * @type {'sm' | 'md' | 'lg'}
   */
  export let size = 'md';

  /**
   * ets how compact the component will be. If true, only 5 steps will show.
   * @type {boolean}
   */
  export let compact = false;

  $: computedClasses = `ds-pagination__item ds-pagination--${size} ${
    compact ? 'ds-pagination--compact' : ''
  }`;
</script>

<li class={computedClasses} {...$$restProps}><slot /></li>
