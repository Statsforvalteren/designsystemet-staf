<script>
  let { className = '', children, ...rest } = $props();
</script>

<li class={`ds-list__item ${className}`} {...rest}>
  {@render children?.()}
</li>

<style>
  .ds-list__item {
    margin-bottom: var(--ds-spacing-2);
    text-align: left;
  }
</style>
