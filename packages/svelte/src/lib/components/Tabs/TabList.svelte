<!-- TabList.svelte -->
<div class={`ds-tabs__tablist`} {...$$restProps}>
  <slot />
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
