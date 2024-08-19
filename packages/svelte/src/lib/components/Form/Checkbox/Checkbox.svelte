<script>
  import { Paragraph } from '../../..';
  import { getContext } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  /**
   * Label for checkbox.
   * @type {string}
   */
  export let label;

  /**
   * Description for checkbox.
   * @type {string}
   */
  export let description = '';

  /**
   * Toggle disabled for checkbox.
   * @type {boolean}
   */
  export let disabled = undefined;

  /**
   * Toggle readOnly for checkbox.
   * @type {boolean}
   */
  export let readOnly = undefined;

  /**
   * Value for checkbox.
   * @type {string}
   */
  export let value;

  /**
   * Value to control if checkbox is checked by default.
   * @type {boolean}
   */
  export let checked = false;

  const uniqueId = uuidv4();
  const checkboxId = `checkbox-${uniqueId}`;
  const labelId = `label-${uniqueId}`;
  const descriptionId = `description-${uniqueId}`;
  const checkboxGroup = getContext('checkboxGroup');

  let size;
  let standardizedSize;
  let groupUniqueId;
  let error;
  let groupValue;
  let groupDisabled = false;
  let groupReadOnly = false;
  let isPartOfGroup = false;

  if (checkboxGroup) {
    isPartOfGroup = true;
    checkboxGroup.subscribe(($checkboxGroup) => {
      groupValue = $checkboxGroup.value;
      if (groupValue.includes(value)) {
        checked = true;
      }
    });
  } else {
    checked = checked;
  }

  switch (size) {
    case 'small':
    case 'sm':
      standardizedSize = 'sm';
      break;
    case 'medium':
    case 'md':
      standardizedSize = 'md';
      break;
    case 'large':
    case 'lg':
      standardizedSize = 'lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }

  function handleGroupChange(event) {
    $checkboxGroup.value = event.target.checked
      ? [...$checkboxGroup.value, value]
      : $checkboxGroup.value.filter((v) => v !== value);
  }

  function handleChange(event) {
    if (isPartOfGroup) {
      handleGroupChange(event);
    } else {
      checked = event.target.checked;
    }
  }

  $: if ($checkboxGroup) {
    size = $checkboxGroup.size;
    groupDisabled = $checkboxGroup.disabled;
    groupReadOnly = $checkboxGroup.readOnly;
    groupUniqueId = $checkboxGroup.uniqueId;
    error = $checkboxGroup.error;
  }

  $: checkboxClasses = `ds-checkbox ds-checkbox--${standardizedSize} ${
    error ? 'ds-checkbox--error' : ''
  } ${readOnly || groupReadOnly ? 'ds-checkbox--readonly' : ''} ${
    $$props.class || ''
  }`;
</script>

<Paragraph as="div" {size}>
  <div
    class={checkboxClasses}
    tabindex="-1"
    role="checkbox"
    aria-checked={checked}
    aria-label={label}
    aria-labelledby={labelId}
    id={checkboxId}
  >
    <input
      class="ds-checkbox__input"
      type="checkbox"
      id={labelId}
      {value}
      bind:checked
      on:change={handleChange}
      name={`checkbox-${groupUniqueId}`}
      disabled={disabled || readOnly || groupDisabled || groupReadOnly}
    />
    <label for={labelId} class="ds-checkbox__label">
      {#if readOnly}
        <span
          aria-hidden
          class="ds-checkbox__label ds-checkbox__readyonly-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
            ><path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.25 7a4.75 4.75 0 0 1 9.5 0v2.25H17c.966 0 1.75.784 1.75 1.75v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-9c0-.966.784-1.75 1.75-1.75h.25zm1.5 0a3.25 3.25 0 0 1 6.5 0v2.25h-6.5zM7 10.75a.25.25 0 0 0-.25.25v8.25h10.5V11a.25.25 0 0 0-.25-.25zm3.5 3.75a1.5 1.5 0 1 1 2.25 1.3V17a.75.75 0 0 1-1.5 0v-1.2a1.5 1.5 0 0 1-.75-1.3"
              clip-rule="evenodd"
            /></svg
          >
        </span>
      {/if}
      <span>
        {label}
      </span>
    </label>
    {#if description}
      <p id={descriptionId} class="ds-checkbox__description">
        {description}
      </p>
    {/if}
  </div>
</Paragraph>

<style lang="scss">
  .ds-checkbox {
    --dsc-checkbox-size: 1.75rem;
    --dsc-checkbox-focus-border-width: 3px;
    --dsc-checkbox-background: var(--ds-color-neutral-background-default);
    --dsc-checkbox-border-color: var(--ds-color-neutral-border-default);
    --dsc-checkbox-border__hover--size: calc(var(--ds-spacing-3) / 2);
    --dsc-checkbox-border__hover: 0 0 0 var(--dsc-checkbox-border__hover--size)
      var(--ds-color-accent-surface-hover);
    --dsc-checkbox-check_color: transparent;

    display: grid;
  }

  .ds-checkbox:has(.ds-checkbox__label) {
    grid-template-columns: var(--dsc-checkbox-size) auto;
    gap: var(--ds-spacing-2);
  }

  /* Checkbox */
  .ds-checkbox__input {
    position: relative;
    width: var(--dsc-checkbox-size);
    height: var(--dsc-checkbox-size);
    z-index: 1;
    appearance: none;
    margin: 0;
    align-self: center;
    outline: none;
    cursor: pointer;
    box-shadow: inset 0 0 0 2px var(--dsc-checkbox-border-color);
    background: var(--dsc-checkbox-background);
    border-radius: var(--ds-border-radius-md);
  }

  .ds-checkbox__input::before {
    position: absolute;
    content: '';
    display: block;
    width: 2.75rem;
    height: 2.75rem;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    cursor: pointer;
    border-radius: var(--ds-border-radius-md);
  }

  .ds-checkbox__label {
    /* min-height: var(--ds-sizing-10); */
    min-width: min-content;
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-spacing-1);
    align-items: center;
    cursor: pointer;
  }

  .ds-checkbox__description {
    margin: calc(var(--ds-spacing-1) * -1) 0 0 0;
    color: var(--ds-color-neutral-text-subtle);
    grid-column: 2;
  }

  .ds-checkbox--readonly > .ds-checkbox__label,
  .ds-checkbox--readonly > .ds-checkbox__input,
  .ds-checkbox--readonly > .ds-checkbox__input::before {
    cursor: default;
  }

  .ds-checkbox__input:disabled,
  .ds-checkbox__input:disabled ~ .ds-checkbox__label,
  .ds-checkbox__input:disabled::before {
    cursor: not-allowed;
  }

  /*   .ds-checkbox__input:focus-visible {
    outline-offset: 3px;
    outline: var(--dsc-checkbox-focus-border-width) solid var(--ds-color-focus-outer);
    box-shadow:
      0 0 0 var(--dsc-checkbox-focus-border-width) var(--ds-color-focus-inner),
      inset 0 0 0 2px var(--dsc-checkbox-border-color);
  } */

  .ds-checkbox__input::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--dsc-checkbox-check_color);
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.5509 6.32414C18.9414 6.71467 18.9414 7.34783 18.5509 7.73836L10.5821 15.7071C10.1916 16.0976 9.55842 16.0976 9.16789 15.7071L4.94914 11.4884C4.55862 11.0978 4.55862 10.4647 4.94914 10.0741C5.33967 9.68362 5.97283 9.68362 6.36336 10.0741L9.875 13.5858L17.1366 6.32414C17.5272 5.93362 18.1603 5.93362 18.5509 6.32414Z' fill='white'/%3E%3C/svg%3E%0A");
  }

  .ds-checkbox__input:checked {
    --dsc-checkbox-border-color: var(--ds-color-accent-base-default);
    --dsc-checkbox-background: var(--ds-color-accent-base-default);
    --dsc-checkbox-check_color: white;

    background: var(--dsc-checkbox-background);
  }

  .ds-checkbox__input:indeterminate {
    --dsc-checkbox-border-color: var(--ds-color-accent-base-default);
    --dsc-checkbox-background: var(--ds-color-accent-base-default);
    --dsc-checkbox-check_color: white;
  }

  .ds-checkbox__input:indeterminate::after {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.25 11.25C4.25 10.4216 4.92157 9.75 5.75 9.75H16.75C17.5784 9.75 18.25 10.4216 18.25 11.25C18.25 12.0784 17.5784 12.75 16.75 12.75H5.75C4.92157 12.75 4.25 12.0784 4.25 11.25Z' fill='white' /%3E%3C/svg%3E%0A");
  }

  .ds-checkbox--readonly > .ds-checkbox__input {
    --dsc-checkbox-border-color: var(--ds-color-neutral-border-subtle);
    --dsc-checkbox-background: var(--ds-color-neutral-background-subtle);
  }

  .ds-checkbox__input:disabled,
  .ds-checkbox__input:disabled ~ .ds-checkbox__label,
  .ds-checkbox__input:disabled ~ .ds-checkbox__description {
    opacity: var(--ds-disabled-opacity);
  }

  /* .ds-checkbox__input:checked:not(:focus-visible) {
    box-shadow: inset 0 0 0 2px var(--dsc-checkbox-border-color);
  } */

  .ds-checkbox:has(.ds-checkbox__input:focus-visible) {
    --dsc-focus-border-width: 3px;

    outline: var(--dsc-focus-border-width) solid var(--ds-color-focus-outer);
    outline-offset: var(--dsc-focus-border-width);
    box-shadow: 0 0 0 var(--dsc-focus-border-width) var(--ds-color-focus-inner);
    border-radius: var(--ds-border-radius-md);
  }

  .ds-checkbox--readonly > .ds-checkbox__input:checked {
    --dsc-checkbox-check_color: var(--ds-color-neutral-text-subtle);

    background: var(--dsc-checkbox-background);
  }

  .ds-checkbox--readonly > .ds-checkbox__input:indeterminate {
    --dsc-checkbox-check_color: var(--ds-color-neutral-text-subtle);

    background: var(--dsc-checkbox-background);
  }

  .ds-checkbox--error > .ds-checkbox__input:not(:disabled, :focus-visible) {
    --dsc-checkbox-border-color: var(--ds-color-danger-border-default);
  }

  /* Only use hover for non-touch devices to prevent sticky-hovering
    "input:not(:read-only)" does not work so using ".container:not(.readonly) >" instead */
  @media (hover: hover) and (pointer: fine) {
    .ds-checkbox:not(.ds-checkbox--readonly)
      .ds-checkbox__input:not(:disabled)
      ~ .ds-checkbox__label:hover,
    .ds-checkbox:not(.ds-checkbox--readonly)
      .ds-checkbox__input:hover:not(:disabled)
      ~ .ds-checkbox__label {
      color: var(--ds-color-accent-text-subtle);
    }

    .ds-checkbox:not(.ds-checkbox--readonly)
      .ds-checkbox__input:hover:not(:checked, :disabled, :focus-visible) {
      --dsc-checkbox-border-color: var(--ds-color-accent-border-strong);

      box-shadow: var(--dsc-checkbox-border__hover),
        inset 0 0 0 2px var(--dsc-checkbox-border-color);
    }

    .ds-checkbox:not(.ds-checkbox--readonly)
      .ds-checkbox__input:indeterminate:hover:not(:focus-visible) {
      --dsc-checkbox-border-color: var(--ds-color-accent-border-strong);

      box-shadow: var(--dsc-checkbox-border__hover);
    }

    .ds-checkbox:not(.ds-checkbox--readonly)
      .ds-checkbox__input:hover:checked:not(:disabled, :focus-visible) {
      box-shadow: var(--dsc-checkbox-border__hover);
    }
  }

  /** Sizing */

  .ds-checkbox--sm {
    --dsc-checkbox-size: var(--ds-sizing-5);

    /* min-height: var(--ds-sizing-10); */
  }

  .ds-checkbox--md {
    --dsc-checkbox-size: var(--ds-sizing-6);

    /* min-height: var(--ds-sizing-11); */
  }

  .ds-checkbox--lg {
    --dsc-checkbox-size: var(--ds-sizing-7);

    /* min-height: var(--ds-sizing-12); */
  }

  .ds-checkbox__readyonly-icon {
    cursor: not-allowed;
  }
</style>
