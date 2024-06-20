<script>
  /**
   * @prop {string} [size='xlarge'] - Specify the size. Options are 'xxsmall', 'xsmall', 'small', 'medium', 'large' and 'xlarge'.
   */

  /**
   * Heading level. This will translate into any h1-6 level unless `as` is defined.
   * @type {1 | 2 | 3 | 4 | 5 | 6}
   */
  export let level = 1;

  /**
   * Changes text sizing.
   * @type {'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
   */
  export let size = "xlarge";

  /**
   * Adds margin-bottom.
   * @type {boolean}
   */
  export let spacing = false;

  /**
   * The type of element to render. Default is heading.
   * @type {string}
   */
  export let as = `h${level}`;

  /**
   * Custom class name.
   * @type {string}
   */
  export let className = "";

  let standardizedSize;

  switch (size) {
    case "xxsmall":
    case "2xs":
      standardizedSize = "2xs";
      break;
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
    case "xlarge":
    case "xl":
      standardizedSize = "xl";
      break;
    case "xxlarge":
    case "2xl":
      standardizedSize = "2xl";
      break;
    default:
      standardizedSize = "md";
      break;
  }

  $: computedClass = `ds-heading ds-heading--${standardizedSize} ${className} ${
    spacing ? "ds-heading--spacing" : ""
  }`;
</script>

{#if as === "h1"}
  <h1 class={computedClass}><slot /></h1>
{:else if as === "h2"}
  <h2 class={computedClass}><slot /></h2>
{:else if as === "h3"}
  <h3 class={computedClass}><slot /></h3>
{:else if as === "h4"}
  <h4 class={computedClass}><slot /></h4>
{:else if as === "h5"}
  <h5 class={computedClass}><slot /></h5>
{:else if as === "h6"}
  <h6 class={computedClass}><slot /></h6>
{:else}
  <div class={computedClass}><slot /></div>
{/if}

<style>
  .ds-heading {
    --dsc-bottom-spacing: var(--ds-spacing-6);

    margin: 0;
    color: var(--ds-color-neutral-text-default);
  }

  .ds-heading--spacing {
    margin-bottom: var(--dsc-bottom-spacing);
  }

  .ds-heading--2xl {
    --dsc-bottom-spacing: var(--ds-spacing-7);
  }

  .ds-heading--xl {
    --dsc-bottom-spacing: var(--ds-spacing-6);
  }

  .ds-heading--lg {
    --dsc-bottom-spacing: var(--ds-spacing-5);
  }

  .ds-heading--md {
    --dsc-bottom-spacing: var(--ds-spacing-4);
  }

  .ds-heading--sm {
    --dsc-bottom-spacing: var(--ds-spacing-3);
  }

  .ds-heading--xs {
    --dsc-bottom-spacing: var(--ds-spacing-2);
  }

  .ds-heading--2xs {
    --dsc-bottom-spacing: var(--ds-spacing-1);
  }
</style>
