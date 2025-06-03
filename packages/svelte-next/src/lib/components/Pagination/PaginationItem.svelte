<script>
  

  
  /** @type {{Record<string, any>}} */
  let { size = 'md', compact = false, children, ...rest } = $props();

  let computedClasses = $derived(`ds-pagination__item ds-pagination--${size} ${
    compact ? 'ds-pagination--compact' : ''
  }`);
</script>

<li class={computedClasses} {...rest}>{@render children?.()}</li>
