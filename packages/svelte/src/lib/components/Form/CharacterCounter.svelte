<script>
  export let label = defaultLabel;
  export let srLabel = "";
  export let maxCount;
  export let value;
  export let id;
  export let size = "medium";

  let fontSizeClass;
  switch (size) {
    case "small":
    case "sm":
      fontSizeClass = "font-small";
      break;
    case "medium":
    case "md":
      fontSizeClass = "font-medium";
      break;
    case "large":
    case "lg":
      fontSizeClass = "font-large";
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }

  function defaultLabel(count) {
    return count > -1
      ? `${count} tegn igjen`
      : `${Math.abs(count)} tegn for mye`;
  }

  function defaultSrLabel(maxCount) {
    return `Tekstfelt med plass til ${maxCount} tegn`;
  }

  $: currentCount = maxCount - value.length;
  $: hasExceededLimit = value.length > maxCount;
  $: finalSrLabel = srLabel || defaultSrLabel(maxCount);
</script>

<span class={`visuallyHidden ${fontSizeClass}`} {id}>
  {finalSrLabel}
</span>

<span
  class={`${hasExceededLimit ? "error" : ""} ${fontSizeClass}`}
  aria-live={hasExceededLimit ? "polite" : "off"}
>
  {label ? label(currentCount) : defaultLabel(currentCount)}
</span>

<style>
  .error {
    color: var(--ds-color-danger-text-subtle);
  }

  .visuallyHidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
  }

  .font-small {
    font-size: 14px;
  }
  .font-medium {
    font-size: 16px;
  }
  .font-large {
    font-size: 18px;
  }
</style>
