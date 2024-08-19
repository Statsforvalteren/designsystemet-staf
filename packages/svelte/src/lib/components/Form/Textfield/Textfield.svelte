<script>
  import { ErrorMessage, Paragraph } from '../../..';
  import { v4 as uuidv4 } from 'uuid';
  import CharacterCounter from '../CharacterCounter.svelte';

  /**
   * Label for the textfield.
   */
  export let label = '';

  /**
   * Description for the textfield.
   */
  export let description = '';

  /**
   * Changes the textfield size and paddings.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * Supported `input` types.
   * @type {'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number'
    | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'}
   */
  export let type = 'text';

  /**
   * Visually hides the label and description for the textfield (still available for screen readers).
   */
  export let hideLabel = false;

  /**
   * Makes the textfield read-only.
   */
  export let readOnly = false;

  /**
   * Value of the internal input field.
   */
  export let value;

  /**
   * Error message to display.
   */
  export let error = '';

  /**
   * Prefix for textfield.
   */
  export let prefix = '';

  /**
   * Suffix for textfield.
   */
  export let suffix = '';

  /**
   * Sets limit for number of characters.
   */
  export let characterLimit = null;

  /**
   * Sets custom label for shown character limit (function is possible to pass in, see example).
   */
  export let characterLimitLabel = null;

  let componentId = uuidv4();
  let standardizedSize;
  let fontSizeClass;

  switch (size) {
    case 'small':
    case 'sm':
      standardizedSize = 'sm';
      fontSizeClass = 'font--sm';
      break;
    case 'medium':
    case 'md':
      standardizedSize = 'md';
      fontSizeClass = 'font--md';
      break;
    case 'large':
    case 'lg':
      standardizedSize = 'lg';
      fontSizeClass = 'font--lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }

  // Computed class names for the component elements
  let formFieldClasses = `ds-textfield ds-textfield--${standardizedSize} ${
    error ? 'ds-textfield--error' : ''
  } ${readOnly ? 'ds-textfield--readonly' : ''} ${
    $$props.class || ''
  } ${fontSizeClass}`;
  let labelClasses = `ds-textfield__label ${hideLabel ? 'ds-sr-only' : ''}`;
  let descriptionClasses = `ds-textfield__description ${
    hideLabel ? 'ds-sr-only' : ''
  } ${fontSizeClass}`;
  let fieldClasses = 'ds-textfield__field';
  let inputClasses = `ds-textfield__input ds-focus ${
    prefix ? 'ds-textfield__input--with-prefix' : ''
  } ${suffix ? 'ds-textfield__input--with-suffix' : ''} ${
    readOnly ? 'ds-textfield--readonly' : ''
  } ${fontSizeClass}`;
  let errorMessageClasses = `ds-textfield__error-message ${fontSizeClass}`;
</script>

<Paragraph as="div" {size}>
  <div class={formFieldClasses}>
    {#if label}
      <label for={`input-field-${componentId}`} class={labelClasses}>
        {#if readOnly}
          <span
            aria-hidden
            class="ds-textfield__readonly__icon"
            style="margin: -5px 3px 0 -5px;"
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
        <span>{label}</span>
      </label>
    {/if}
    {#if description}
      <Paragraph as="p" {size}>
        <div id="description" class={descriptionClasses}>
          {description}
        </div>
      </Paragraph>
    {/if}
    <div class={fieldClasses}>
      {#if prefix}
        <div
          class="ds-textfield__adornment ds-textfield__prefix"
          aria-hidden="true"
        >
          {prefix}
        </div>
      {/if}
      <input
        bind:value
        on:input
        class={inputClasses}
        id={`input-field-${componentId}`}
        {...{ type }}
        aria-describedby="description"
        readonly={readOnly}
        {...$$restProps}
      />
      {#if suffix}
        <div
          class="ds-textfield__adornment ds-textfield__suffix"
          aria-hidden="true"
        >
          {suffix}
        </div>
      {/if}
    </div>
    {#if characterLimit}
      <CharacterCounter
        maxCount={characterLimit}
        {value}
        id={`character-counter-${componentId}`}
        {size}
        label={characterLimitLabel}
      />
    {/if}
    {#if error}
      <div
        class={errorMessageClasses}
        aria-live="polite"
        aria-relevant="additions removals"
        id={`error-message-${componentId}`}
      >
        <ErrorMessage {size}>{error}</ErrorMessage>
      </div>
    {/if}
  </div>
</Paragraph>

<style>
  .ds-textfield {
    display: grid;
    gap: var(--ds-spacing-2);
  }

  .ds-textfield__adornment {
    color: var(--ds-color-neutral-text-subtle);
    background: var(--ds-color-neutral-background-subtle);
    padding: 9px var(--ds-spacing-4);
    border-radius: var(--ds-border-radius-md);
    border: solid 1px var(--ds-color-neutral-border-default);
    box-sizing: border-box;
    display: inline-block;
  }

  .ds-textfield__input {
    font-family: inherit;
    position: relative;
    box-sizing: border-box;
    flex: 0 1 auto;
    width: 100%;
    appearance: none;
    padding: 0 var(--ds-spacing-3);
    border: solid 1px var(--ds-color-neutral-border-default);
    background: var(--ds-color-neutral-background-default);
    color: var(--ds-color-neutral-text-default);
    border-radius: var(--ds-border-radius-md);
  }

  .ds-textfield__input:disabled {
    cursor: not-allowed;
  }

  .ds-textfield--readonly .ds-textfield__input {
    background: var(--ds-color-neutral-background-subtle);
    border-color: var(--ds-color-neutral-border-strong);
  }

  .ds-textfield__field {
    display: flex;
    align-items: stretch;
    border-radius: var(--ds-border-radius-md);
  }

  .ds-textfield__field > *:first-child {
    border-top-left-radius: var(--ds-border-radius-md);
    border-bottom-left-radius: var(--ds-border-radius-md);
  }

  .ds-textfield__field > *:last-child {
    border-top-right-radius: var(--ds-border-radius-md);
    border-bottom-right-radius: var(--ds-border-radius-md);
  }

  .ds-textfield--sm .ds-textfield__adornment {
    padding: var(--ds-sizing-2) var(--ds-spacing-3);
  }

  .ds-textfield--md .ds-textfield__adornment {
    padding: 0.65rem var(--ds-spacing-4);
  }

  .ds-textfield--lg .ds-textfield__adornment {
    padding: 0.85rem var(--ds-spacing-5);
  }

  .ds-textfield--sm .ds-textfield__field {
    height: var(--ds-sizing-10);
  }

  .ds-textfield--md .ds-textfield__field {
    height: var(--ds-sizing-12);
  }

  .ds-textfield--lg .ds-textfield__field {
    height: var(--ds-sizing-14);
  }

  .ds-textfield--sm .ds-textfield__input {
    padding: 0 var(--ds-spacing-2);
  }

  .ds-textfield--md .ds-textfield__input {
    padding: 0 var(--ds-spacing-3);
  }

  .ds-textfield--lg .ds-textfield__input {
    padding: 0 var(--ds-spacing-4);
  }

  .ds-textfield__label {
    min-width: min-content;
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-spacing-1);
    align-items: center;
  }

  .ds-textfield__description {
    color: var(--ds-color-neutral-text-subtle);
    margin-top: calc(var(--ds-spacing-2) * -1);
  }

  .ds-textfield:has(.ds-textfield__input:disabled) {
    opacity: var(--ds-disabled-opacity);
  }

  .ds-textfield--error .ds-textfield__input:not(:focus-visible) {
    border-color: var(--ds-color-danger-border-default);
    box-shadow: inset 0 0 0 1px var(--ds-color-danger-border-default);
  }

  @media (hover: hover) and (pointer: fine) {
    .ds-textfield__input:not(
        :focus-visible,
        :disabled,
        [aria-disabled],
        .ds-textfield--readonly
      ):hover {
      border-color: var(--ds-color-accent-border-strong);
      box-shadow: inset 0 0 0 1px var(--ds-color-accent-border-strong);
    }
  }

  .ds-textfield__input--with-prefix {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ds-textfield__input--with-suffix {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ds-textfield__prefix {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ds-textfield__suffix {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ds-textfield__readonly__icon {
    height: 1.2em;
    width: 1.2em;
  }

  .ds-textfield__error-message:empty {
    display: none;
  }
  .font--sm {
    font-size: 0.9375rem;
  }
  .font--md {
    font-size: 1.125rem;
  }
  .font--lg {
    font-size: 1.25rem;
  }
  .ds-sr-only {
    visibility: hidden;
  }
</style>
