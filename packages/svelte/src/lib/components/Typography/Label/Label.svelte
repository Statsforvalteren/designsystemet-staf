<script>
  /**
   * The type of element to render. Default is 'p'.
   * @type {string}
   */
  export let as = "p";
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
   * Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset.
   * @type {'regular' | 'medium' | 'semibold'}
   */
  export let weight;

  /**
   * Custom class to be added to the component.
   */
  export let className = "";

  let standardizedSize;

  switch (size) {
    case "xsmall":
    case "xs":
      standardizedSize = "xs";
      break;
    case "small":
    case "sm":
      standardizedSize = "sm";
      break;
    case "medium":
    case "md":
      standardizedSize = "md";
      break;
    case "large":
    case "lg":
      standardizedSize = "lg";
      break;
    default:
      standardizedSize = "md";
      break;
  }

  $: computedClass = [
    "ds-label",
    `ds-label--${standardizedSize}`,
    spacing ? "ds-label--spacing" : "",
    weight ? `ds-label--${weight}-weight` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
</script>

{#if as === "p"}
  <p class={computedClass}>
    <slot />
  </p>
{:else if as === "span"}
  <span class={computedClass}>
    <slot />
  </span>
{:else}
  <div class={computedClass}>
    <slot />
  </div>
{/if}

<style>
  .ds-label {
    --dsc-bottom-spacing: var(--ds-spacing-1);

    display: inline-block;
    margin: 0;
    padding: 0;
    color: var(--ds-color-neutral-text-default);
  }

  .ds-label--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }

  .ds-label--regular-weight {
    font-weight: 400;
  }

  .ds-label--medium-weight {
    font-weight: 500;
  }

  .ds-label--semibold-weight {
    font-weight: 600;
  }
</style>
