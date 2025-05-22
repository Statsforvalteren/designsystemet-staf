<script>
  import { setContext } from 'svelte';

  

  
  /** @type {{Record<string, any>}} */
  let { border, color, children, ...rest } = $props();

  setContext('accordion', { border, color });
</script>

<div
  {...rest}
  class={`ds-accordion ${color} ${
    border ? 'ds-accordion--border' : ''
  } ds-accordion--${color}`}
>
  {@render children?.()}
</div>

<style>
  .ds-accordion {
    --dsc-accordion-border-radius: var(--ds-border-radius-md);
    --dsc-accordion-border-color: var(--ds-color-neutral-border-subtle);
    --dsc-accordion-background: var(--ds-color-neutral-background-default);
    --dsc-accordion-button-background: var(
      --ds-color-neutral-background-default
    );
    --dsc-accordion-button-background-open: var(
      --ds-color-neutral-background-subtle
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-neutral-surface-default
    );
    --dsc-accordion-icon-background-active: var(
      --ds-color-neutral-surface-default
    );
    --dsc-accordion-background-hover: var(--ds-color-neutral-surface-hover);

    border-bottom: 1px solid var(--dsc-accordion-border-color);
    box-sizing: border-box;
    background-color: var(--dsc-accordion-background);
  }

  .ds-accordion--border {
    border: 1px solid var(--dsc-accordion-border-color);
    border-radius: var(--dsc-accordion-border-radius);
  }

  .ds-accordion__content {
    padding: var(--ds-spacing-5, 1rem);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ds-accordion__item:focus-within {
    position: relative;
  }

  .ds-accordion--neutral {
    --dsc-accordion-background: var(--ds-color-neutral-background-default);
    --dsc-accordion-button-background: var(
      --ds-color-neutral-background-default
    );
    --dsc-accordion-button-background-open: var(
      --ds-color-neutral-background-subtle
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-neutral-surface-default
    );
    --dsc-accordion-background-hover: var(--ds-color-neutral-surface-hover);
  }

  .ds-accordion--subtle {
    --dsc-accordion-background: var(--ds-color-neutral-background-subtle);
    --dsc-accordion-border-color: var(--ds-color-neutral-border-default);
    --dsc-accordion-button-background: var(
      --ds-color-neutral-background-subtle
    );
    --dsc-accordion-button-background-open: var(
      --ds-color-neutral-surface-default
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-neutral-surface-default
    );
    --dsc-accordion-icon-background-active: var(
      --ds-color-neutral-surface-active
    );
    --dsc-accordion-background-hover: var(--ds-color-subtle-surface-hover);
  }

  .ds-accordion--brand1 {
    --dsc-accordion-background: var(--ds-color-brand1-background-subtle);
    --dsc-accordion-border-color: var(--ds-color-brand1-border-subtle);
    --dsc-accordion-button-background: var(--ds-color-brand1-surface-default);
    --dsc-accordion-button-background-open: var(
      --ds-color-brand1-surface-hover
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-brand1-surface-active
    );
    --dsc-accordion-icon-background-active: var(
      --ds-color-brand1-surface-active
    );
    --dsc-accordion-background-hover: var(--ds-color-brand1-surface-hover);
  }

  .ds-accordion--brand2 {
    --dsc-accordion-background: var(--ds-color-brand2-background-subtle);
    --dsc-accordion-border-color: var(--ds-color-brand2-border-subtle);
    --dsc-accordion-button-background: var(--ds-color-brand2-surface-default);
    --dsc-accordion-button-background-open: var(
      --ds-color-brand2-surface-hover
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-brand2-surface-active
    );
    --dsc-accordion-icon-background-active: var(
      --ds-color-brand2-surface-active
    );
    --dsc-accordion-background-hover: var(--ds-color-brand2-surface-hover);
  }

  .ds-accordion--brand3 {
    --dsc-accordion-background: var(--ds-color-brand3-background-subtle);
    --dsc-accordion-border-color: var(--ds-color-brand3-border-subtle);
    --dsc-accordion-button-background: var(--ds-color-brand3-surface-default);
    --dsc-accordion-button-background-open: var(
      --ds-color-brand3-surface-hover
    );
    --dsc-accordion-icon-background-hover: var(
      --ds-color-brand3-surface-active
    );
    --dsc-accordion-icon-background-active: var(
      --ds-color-brand3-surface-active
    );
    --dsc-accordion-background-hover: var(--ds-color-brand3-surface-hover);
  }
</style>
