<script>
  /** @type {{Record<string, any>}} */
  let { children, ...rest } = $props();
</script>

<!-- TabList.svelte -->
<div class={`ds-tabs__tablist`} {...rest}>
  {@render children?.()}
</div>

<style>
  .ds-tabs__tablist {
    display: flex;
    flex-direction: row;
    border-bottom: var(--ds-border-width-default) solid
      var(--ds-color-neutral-border-subtle);
    position: relative;
  }
</style>
