<script>
  import { ParagraphWrapper, ErrorMessage } from '../../../index.js';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uuidv4 } from 'uuid';

  /**
   * The legend of the fieldset.
   * @type {string}
   */
  export let legend = '';

  /**
   * A description of the fieldset. This will appear below the legend.
   * @type {string}
   */
  export let description = '';

  /**
   * Toggle readOnly on fieldset context.
   * @type {boolean}
   */
  export let readOnly = false;

  /**
   * Toggle disabled all input fields within the fieldset.
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * If set, this will diplay an error message at the bottom of the fieldset.
   * @type {string}
   */
  export let error = '';

  /**
   * Controlled state for Radio.
   * @type {string}
   */
  export let value;

  /**
   * Default checked Radio.
   * @type {string}
   */
  export let defaultValue = '';

  /**
   * Toggle if collection of Radio are required. `Note:` Not fully implemented for Svelte.
   * @type {boolean}
   */
  export let required = false;

  /**
   * Orientation of Radio components.
   * @type {boolean}
   */
  export let inline = false;

  /**
   * Changes field size and paddings.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * Visually hide legend and description (still available for screen readers).
   * @type {boolean}
   */
  export let hideLegend = false;

  let standardizedSize;

  const uniqueId = uuidv4();
  const radioGroup = writable({
    readOnly,
    disabled,
    size,
    value,
    error,
    uniqueId,
    required,
  });

  if (value === undefined || value === '') value = defaultValue;

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

  $: legendWrapperClasses = `legend-wrapper ${
    hideLegend ? 'visually-hidden' : ''
  }`;
  $: descriptionClasses = `ds-radio__description ${
    hideLegend ? 'visually-hidden' : ''
  }`;

  $: setContext('radioGroup', radioGroup);

  $: {
    radioGroup.update((storeValue) => ({
      ...storeValue,
      readOnly: readOnly,
      disabled: disabled,
      size: size,
      error: error,
      value: value,
      required: required,
    }));
  }
</script>

<fieldset
  id={`group-${uniqueId}`}
  aria-labelledby={`label-${uniqueId}`}
  on:input
  on:change={(change) => {
    if (
      change.target instanceof HTMLInputElement &&
      change.target.type === 'radio'
    ) {
      value = change.target.value;
    }
  }}
>
  {#if legend}
    <div class={legendWrapperClasses}>
      {#if readOnly}
        <span
          aria-hidden="true"
          class={`padlock-icon icon-size--${standardizedSize}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.25 7a4.75 4.75 0 0 1 9.5 0v2.25H17c.966 0 1.75.784 1.75 1.75v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-9c0-.966.784-1.75 1.75-1.75h.25zm1.5 0a3.25 3.25 0 0 1 6.5 0v2.25h-6.5zM7 10.75a.25.25 0 0 0-.25.25v8.25h10.5V11a.25.25 0 0 0-.25-.25zm3.5 3.75a1.5 1.5 0 1 1 2.25 1.3V17a.75.75 0 0 1-1.5 0v-1.2a1.5 1.5 0 0 1-.75-1.3"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      {/if}
      <ParagraphWrapper {size}>
        <legend class="legend" id={`label-${uniqueId}`}>
          {legend}
        </legend>
      </ParagraphWrapper>
    </div>
  {/if}
  {#if description}
    <ParagraphWrapper {size}>
      <div class={descriptionClasses}>
        {description}
      </div>
    </ParagraphWrapper>
  {/if}
  <div class={`ds-radio-group ${inline ? 'ds-radio-group--horizontal' : ''}`}>
    <slot />
  </div>
  {#if error}
    <ParagraphWrapper {size}>
      <ErrorMessage {size}>{error}</ErrorMessage>
    </ParagraphWrapper>
  {/if}
</fieldset>

<style>
  .ds-radio-group {
    margin: var(--ds-spacing-4) 0;
    display: flex;
    flex-direction: column;
    gap: var(--ds-spacing-3);
    width: fit-content;
  }
  .ds-radio-group--horizontal {
    display: flex;
    flex-direction: row;
    gap: var(--ds-spacing-6);
  }
  .ds-radio__description {
    margin-top: var(--ds-spacing-1);
    color: var(--ds-color-neutral-text-subtle);
  }
  .ds-radio:has(.ds-radio__input:disabled) > .ds-radio__description {
    opacity: var(--ds-disabled-opacity);
  }
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 0.0625rem;
    margin: -0.0625rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 0.0625rem;
  }
  .legend-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    display: block;
  }
  legend {
    font-weight: 500;
    padding: 0;
    margin: 0;
    display: table;
    max-width: 100%;
    white-space: normal;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    align-self: flex-start;
  }
  .padlock-icon {
    grid-area: label;
    position: relative;
    top: 1px;
    scale: 1.4;
  }
  .icon-size--sm {
    width: 0.9rem;
    height: 0.9rem;
  }
  .icon-size--md {
    width: 1.2rem;
    height: 1.2rem;
  }
  .icon-size--lg {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
