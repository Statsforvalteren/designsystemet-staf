<script lang="ts">
  type errorMessagePropTypes = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    spacing?: boolean;
    error?: boolean;
    class_?: string;
    children?: () => any;
  };
  let {
    size = 'md',
    spacing = false,
    error = true,
    class_ = '',
    children,
  }: errorMessagePropTypes = $props();

  let computedClass = $derived(
    [
      'ds-error-message',
      `ds-error_message--${size}`,
      spacing ? 'ds-error-message--spacing' : '',
      error ? 'ds-error-message--error' : '',
      class_ || '',
    ]
      .filter(Boolean)
      .join(' '),
  );
</script>

<div class={computedClass}>
  {@render children?.()}
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
    --dsc-bottom-spacing: var(--ds-spacing-6);
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
