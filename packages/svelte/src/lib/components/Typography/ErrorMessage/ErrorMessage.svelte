<script>
  /**
   * Text sizing.
   * @type {'xsmall' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg'}
   */
  export let size = "medium";

  /**
   * Adds margin-bottom.
   * @type {boolean}
   */
  export let spacing = false;

  /**
   * Toggle error color.
   * @type {boolean}
   */
  export let error = true;

  $: computedClass = [
    "ds-error-message",
    `ds-error_message--${size}`,
    spacing ? "ds-error-message--spacing" : "",
    error ? "ds-error-message--error" : "",
    $$props.class || "",
  ]
    .filter(Boolean)
    .join(" ");
</script>

<div class={computedClass}>
  <slot />
</div>

<style>
  .ds-error-message {
    --dsc-bottom-spacing: var(--ds-spacing-5);

    margin: 0;
  }

  .ds-error-message--error {
    color: var(--ds-color-danger-text-subtle);
  }

  .ds-error-message--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }

  .ds-error_message--lg {
    --dsc-bottom-spacing: var(--ds-spacing-5);
  }

  .ds-error_message--md {
    --dsc-bottom-spacing: var(--ds-spacing-5);
  }

  .ds-error_message--sm {
    --dsc-bottom-spacing: var(--ds-spacing-4);
  }

  .ds-error_message--xs {
    --dsc-bottom-spacing: var(--ds-spacing-3);
  }
</style>
