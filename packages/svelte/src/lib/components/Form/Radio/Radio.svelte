<script>
  import { Paragraph } from "$lib";
  import { getContext } from "svelte";
  import { v4 as uuidv4 } from "uuid";

  /**
   * Decription for radio.
   * @type {string}
   */
  export let description = "";

  /**
   * Toggle disabled for radio.
   * @type {boolean}
   */
  export let disabled = undefined;

  /**
   * Toggle readOnly for radio.
   * @type {boolean}
   */
  export let readOnly = undefined;

  /**
   * Label for radio.
   * @type {string}
   */
  export let label;

  /**
   * Value for radio.
   * @type {string}
   */
  export let value;

  const uniqueId = uuidv4();
  const radioId = `radio-${uniqueId}`;
  const labelId = `label-${uniqueId}`;
  const descriptionId = `description-${uniqueId}`;
  const radioGroup = getContext("radioGroup");

  let size;
  let standardizedSize;
  let selectedValue;
  let groupUniqueId;
  let error;
  let groupDisabled = false;
  let groupReadOnly = false;

  switch (size) {
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

  $: checked = value === selectedValue;

  $: if ($radioGroup) {
    size = $radioGroup.size;
    groupDisabled = $radioGroup.disabled;
    groupReadOnly = $radioGroup.readOnly;
    groupUniqueId = $radioGroup.uniqueId;
    selectedValue = $radioGroup.value;
    error = $radioGroup.error;
  }

  $: radioClasses = `ds-radio ds-radio--${standardizedSize} ${
    error ? "ds-radio--error" : ""
  } ${readOnly || groupReadOnly ? "ds-radio--readonly" : ""} ${
    $$props.class || ""
  }`;
</script>

<Paragraph as="div" {size}>
  <div
    class={radioClasses}
    tabindex="-1"
    role="radio"
    aria-checked={checked}
    aria-label={label}
    aria-labelledby={labelId}
    id={radioId}
  >
    <input
      class="ds-radio__input"
      type="radio"
      id={labelId}
      {value}
      bind:group={selectedValue}
      name={`radio-${groupUniqueId}`}
      disabled={disabled || readOnly || groupDisabled || groupReadOnly}
    />
    <label for={labelId} class="ds-radio__label">
      <span>
        {label}
      </span>
    </label>
    {#if description}
      <p id={descriptionId} class="ds-radio__description">
        {description}
      </p>
    {/if}
  </div>
</Paragraph>

<style lang="scss">
  .ds-radio {
    --dsc-radio-size: var(--ds-spacing-5);
    --dsc-radio-focus-border-width: 3px;
    --dsc-radio-background: var(--ds-color-neutral-background-default);
    --dsc-radio-border-color: var(--ds-color-neutral-border-default);
    --dsc-radio-border__hover--size: calc(var(--ds-spacing-3) / 2);
    --dsc-radio-border__hover: 0 0 0 var(--dsc-radio-border__hover--size)
      var(--ds-color-accent-surface-hover);

    display: grid;
  }

  .ds-radio:has(.ds-radio__label) {
    grid-template-columns: var(--dsc-radio-size) auto;
    gap: var(--ds-spacing-2);
  }

  /* Radio */
  .ds-radio__input {
    position: relative;
    width: var(--dsc-radio-size);
    height: var(--dsc-radio-size);
    z-index: 1;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    align-self: center;
    box-shadow: inset 0 0 0 2px var(--dsc-radio-border-color);
    background: var(--dsc-radio-background);
    border-radius: 50%;
  }

  .ds-radio__input::before {
    position: absolute;
    content: "";
    display: block;
    width: 2.75rem;
    height: 2.75rem;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    cursor: pointer;
    border-radius: var(--ds-border-radius-md);
  }

  .ds-radio__label {
    /* min-height: var(--ds-sizing-10); */
    min-width: min-content;
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-spacing-1);
    align-items: center;
    cursor: pointer;
  }

  .ds-radio__description {
    margin: calc(var(--ds-spacing-1) * -1) 0 0 0;
    color: var(--ds-color-neutral-text-subtle);
    grid-column: 2;
  }

  .ds-radio--readonly > .ds-radio__input,
  .ds-radio--readonly > .ds-radio__label,
  .ds-radio--readonly > .ds-radio__input::before {
    cursor: default;
  }

  .ds-radio:has(.ds-radio__input:disabled) > .ds-radio__description {
    opacity: var(--ds-disabled-opacity);
  }

  .ds-radio__input:disabled,
  .ds-radio__input:disabled::before,
  .ds-radio:has(.ds-radio__input:disabled) > .ds-radio__label {
    cursor: not-allowed;
    opacity: var(--ds-disabled-opacity);
  }

  .ds-radio__input:focus-visible {
    box-shadow: inset 0 0 0 2px var(--dsc-radio-border-color),
      inset 0 0 0 6px var(--dsc-radio-background);
  }

  .ds-radio:has(.ds-radio__input:focus-visible) {
    --dsc-focus-border-width: 3px;

    outline: var(--dsc-focus-border-width) solid var(--ds-color-focus-outer);
    outline-offset: var(--dsc-focus-border-width);
    box-shadow: 0 0 0 var(--dsc-focus-border-width) var(--ds-color-focus-inner);
    border-radius: var(--ds-border-radius-md);
  }

  .ds-radio__input:checked {
    --dsc-radio-border-color: var(--ds-color-accent-base-default);

    background: var(--dsc-radio-border-color);
  }

  .ds-radio--readonly > .ds-radio__input {
    --dsc-radio-border-color: var(--ds-color-neutral-border-subtle);
    --dsc-radio-background: var(--ds-color-neutral-background-subtle);
  }

  .ds-radio__input:checked:not(:focus-visible) {
    box-shadow: inset 0 0 0 2px var(--dsc-radio-border-color),
      inset 0 0 0 6px var(--dsc-radio-background);
  }

  .ds-radio--readonly > .ds-radio__input:checked {
    background: var(--ds-color-neutral-border-strong);
  }

  .ds-radio--error > .ds-radio__input:not(:disabled, :focus-visible) {
    --dsc-radio-border-color: var(--ds-color-danger-border-default);
  }

  /* Only use hover for non-touch devices to prevent sticky-hovering
    "input:not(:read-only)" does not work so using ".container:not(.readonly) >" instead */
  @media (hover: hover) and (pointer: fine) {
    .ds-radio:not(.ds-radio--readonly) > .ds-radio__label:hover:not(:disabled),
    .ds-radio:not(.ds-radio--readonly)
      > .ds-radio__input:hover:not(:disabled)
      + .ds-radio__label {
      color: var(--ds-color-accent-text-subtle);
    }

    .ds-radio:not(.ds-radio--readonly)
      > .ds-radio__input:hover:not(:checked, :disabled, :focus-visible) {
      --dsc-radio-border-color: var(--ds-color-accent-border-strong);

      box-shadow: var(--dsc-radio-border__hover),
        inset 0 0 0 2px var(--dsc-radio-border-color);
    }

    .ds-radio:not(.ds-radio--readonly)
      > .ds-radio__input:hover:checked:not(:disabled, :focus-visible) {
      box-shadow: var(--dsc-radio-border__hover),
        inset 0 0 0 2px var(--dsc-radio-border-color),
        inset 0 0 0 6px var(--dsc-radio-background);
    }
  }

  /** Sizing */

  .ds-radio--sm {
    --dsc-radio-size: var(--ds-sizing-5);

    /* min-height: var(--ds-sizing-10); */
  }

  .ds-radio--md {
    --dsc-radio-size: var(--ds-sizing-6);
    --dsc-radio-border__hover--size: var(--ds-spacing-1);

    /* min-height: var(--ds-sizing-11); */
  }

  .ds-radio--lg {
    --dsc-radio-size: var(--ds-sizing-7);

    /* min-height: var(--ds-sizing-12); */
  }
</style>
