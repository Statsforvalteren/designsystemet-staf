<script>
  /**
   * Sets the title of the spinner for accessibility purposes.
   * @type {string}
   */
  export let title = "";

  /**
   * The size of the spinner to render. Options are 'xSmall', 'small', 'medium', 'large', 'xLarge', '2xs', 'xs', 'sm', 'md', 'lg', 'xl'. Defaults to 'medium'.
   * @type {'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
   */
  export let size = "medium";

  /**
   * What variant of the spinner to render. Options are 'neutral' and 'accent'. Defaults to 'neutral'.
   * @type {'neutral' | 'accent'}
   */
  export let color = "neutral";
  export let className = "";

  let standardizedSize;

  switch (size) {
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
    default:
      standardizedSize = "md";
      break;
  }

  const sizeMap = {
    "2xs": 13,
    xs: 20,
    sm: 27,
    md: 40,
    lg: 56,
    xl: 79,
  };

  const styles = {
    width: `${sizeMap[standardizedSize]}px`,
    height: `${sizeMap[standardizedSize]}px`,
  };
</script>

<svg
  class={`ds-spinner ds-spinner--${color} ${className}`}
  viewBox="0 0 50 50"
  width={styles.width}
  height={styles.height}
  {...$$restProps}
>
  <title>{title}</title>
  <circle
    class="ds-spinner__background"
    cx="25"
    cy="25"
    r="20"
    stroke-width="5"
    fill="none"
  />
  <circle
    class="ds-spinner__circle"
    cx="25"
    cy="25"
    r="20"
    stroke-width="5"
    fill="none"
  />
</svg>

<style lang="scss">
  .ds-spinner {
    animation: ds-spinner-rotate-animation linear infinite;
    animation-duration: 2s;
  }

  .ds-spinner__circle {
    stroke-dasharray: 1px, 200px;
    transform-origin: center;
    animation: ds-spinner-stroke-animation ease-in-out infinite;
    animation-duration: 2s;
  }

  /* Prefers reduced motion needs longer animation,
    but don't remove it since it is not decorative.
   */
  @media (prefers-reduced-motion: reduce) {
    .ds-spinner {
      animation-duration: 6s;
    }

    .ds-spinner__circle {
      animation-duration: 6s;
    }
  }

  .ds-spinner--neutral .ds-spinner__circle {
    stroke: var(--ds-color-neutral-border-default);
  }

  .ds-spinner--accent .ds-spinner__circle {
    stroke: var(--ds-color-accent-base-default);
  }

  .ds-spinner__background {
    stroke: var(--ds-color-neutral-surface-default);
  }

  @keyframes ds-spinner-rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes ds-spinner-stroke-animation {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
      transform: rotate(0deg);
    }

    100% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: -120px;
      transform: rotate(15deg);
    }
  }
</style>
