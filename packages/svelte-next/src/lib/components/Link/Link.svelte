<script>
  let {
    as = 'a',
    color = 'accent',
    href = '',
    class_ = '',
    onclick,
    children,
    ...rest
  } = $props();

  let computedClass = $derived(
    `ds-link ds-link--${color} ${class_ || ''} ds-link--${as}`,
  );
</script>

{#if as === 'a'}
  <a
    class={computedClass}
    {href}
    {...rest}
    onclick={(event) => {
      onclick?.(event);
    }}
  >
    {@render children?.()}
  </a>
{:else if as === 'button'}
  <button
    class={computedClass}
    onclick={(event) => {
      onclick?.(event);
    }}
    {...rest}
  >
    {@render children?.()}
  </button>
{/if}

<style lang="scss">
  .ds-link {
    --dsc-link-color: var(--ds-color-accent-text-subtle);
    --dsc-link-color-hover: var(--ds-color-accent-text-default);
    --dsc-link-color-active: var(--ds-color-accent-text-default);
    --dsc-link-color-active-background: var(--ds-color-accent-surface-default);
    --dsc-link-color-visited: var(--ds-global-purple-12);
    --dsc-link-color-focus: var(--ds-focus-inner);
    --dsc-link-color-focus-background: var(--ds-focus-outer);

    position: relative;
    color: var(--dsc-link-color);
    cursor: pointer;

    text-decoration-thickness: max(1px, 0.0625rem);
    text-underline-offset: max(5px, 0.25rem);
    display: inline-flex;
    align-items: center;
    gap: var(--ds-spacing-1);
  }

  .ds-link:not(.ds-link--button) {
    text-decoration: underline;
  }

  .ds-link--accent {
    --dsc-link-color: var(--ds-color-accent-text-subtle);
    --dsc-link-color-hover: var(--ds-color-accent-text-default);
    --dsc-link-color-active: var(--ds-color-accent-text-default);
    --dsc-link-color-active-background: var(--ds-color-accent-surface-default);
    --dsc-link-color-visited: var(--ds-global-purple-12);
  }

  .ds-link--neutral {
    --dsc-link-color: var(--ds-color-neutral-text-default);
    --dsc-link-color-hover: var(--ds-color-neutral-text-subtle);
    --dsc-link-color-active: var(--ds-color-neutral-text-subtle);
    --dsc-link-color-active-background: var(--ds-color-neutral-surface-default);
    --dsc-link-color-visited: var(--ds-global-purple-12);
  }

  .ds-link:visited {
    color: var(--dsc-link-color-visited);
    text-decoration: none;
  }

  .ds-link:hover {
    color: var(--dsc-link-color-hover);
    text-decoration-thickness: max(2px, 0.125rem, 0.12em);
  }

  .ds-link:focus-visible {
    color: var(--dsc-link-color-focus);
    background: var(--dsc-link-color-focus-background);
    outline: none;
  }

  .ds-link:active {
    color: var(--dsc-link-color-active);
    background: var(--dsc-link-color-active-background);
    border-radius: var(--ds-border-radius-md);
    outline: none;
  }
</style>
