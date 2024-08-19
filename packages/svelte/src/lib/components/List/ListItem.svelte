<script>
  /**
   * Additional classes to add to the component.
   * @type {string}
   */
  export let className = '';
</script>

<li class={`ds-list__item ${className}`} {...$$restProps}>
  <slot />
</li>

<style>
  .ds-list__item {
    margin-bottom: var(--ds-spacing-2);
    text-align: left;
  }
</style>
