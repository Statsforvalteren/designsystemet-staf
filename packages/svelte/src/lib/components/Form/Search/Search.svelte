<script>
  import { Button, ErrorMessage } from '../../..';
  import CharacterCounter from '../CharacterCounter.svelte';
  import { v4 as uuidv4 } from 'uuid';

  /**
   * Label for the search component.
   */
  export let label = '';

  /**
   * Changes field size and paddings.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * Adjusts styling for search.
   * @type {'primary' | 'secondary' | 'simple'}
   */
  export let variant = 'simple';

  /**
   * Visually hides `label`(still available for screen readers).
   */
  export let hideLabel = false;

  /**
   * Disables the field.
   */
  export let disabled = false;

  /**
   * Value of the input field.
   */
  export let value;

  /**
   * Error message to display.
   */
  export let error = '';

  /**
   * Sets limit for number of characters.
   */
  export let characterLimit = null;

  /**
   * Clear button label. Hidden visually. Used for screen readers.
   */
  export let clearButtonLabel = '';

  /**
   * Search button label. Only visible when variant is not "simple".
   */
  export let searchButtonLabel = 'Søk';

  /**
   * onChange handler for when a value has been choosen.
   * @type {(e: MouseEvent, value: string) => void}
   */
  export let onSearchClick = (e, value) => {};
  /**
   * Sets custom label for shown character limit (function is possible to pass in, see example).
   */
  export let characterLimitLabel = null;

  let componentId = uuidv4();

  let standardizedSize;

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

  const isSimple = variant === 'simple';
  $: showClearButton = String(value).length > 0 && !disabled;

  // Computed class names for the component elements
  let formFieldClasses = `ds-search ds-search--${standardizedSize} ${
    disabled ? 'ds-search--disabled' : ''
  } ${$$props.class || ''}`;
  let labelClasses = `ds-search--${standardizedSize} ds-search__label ${
    hideLabel ? 'ds-sr-only' : ''
  }`;
  $: fieldClasses = `ds-search__field ${error ? 'error' : ''}`;
  let inputClasses = `ds-search__input ds-focus ${
    isSimple
      ? 'ds-search__input--simple'
      : 'ds-search__input--with-search-button'
  }`;
  let errorMessageClasses = `ds-search__error-message`;

  let inputRef;

  function handleClear() {
    value = '';
    inputRef?.current && inputRef.current.focus();
  }
</script>

<div class={formFieldClasses}>
  {#if label}
    <label for="search-field" class={labelClasses}>
      <span>{label}</span>
    </label>
  {/if}

  <div class="ds-search__field">
    <div class={fieldClasses}>
      {#if isSimple}
        <span
          class="ds-search__icon"
          style="align-items: center; display: flex;"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      {/if}
      <input
        bind:this={inputRef}
        bind:value
        on:input
        class={inputClasses}
        name="search"
        id="search-field"
        type="search"
        aria-describedby="search field"
        {disabled}
        {...$$restProps}
      />
      {#if showClearButton}
        <button
          class={'ds-search__clear-button ds-focus'}
          type="button"
          on:click={handleClear}
          {disabled}
          style="width: max-content; height: fit-content; padding: 6px;"
        >
          <span>{clearButtonLabel}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
            ><path
              fill="currentColor"
              d="M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"
            /></svg
          >
        </button>
      {/if}
    </div>
    {#if !isSimple}
      <Button
        className={'ds-search__search-button'}
        {size}
        variant={variant !== 'simple' ? variant : undefined}
        type="submit"
        on:click={(e) => onSearchClick(e, value)}
        {disabled}
        style="width: fit-content; white-space:nowrap;"
      >
        {searchButtonLabel}
      </Button>
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
    >
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  {/if}
</div>

<style>
  .ds-search {
    display: inline-grid;
    width: 100%;
    gap: var(--ds-spacing-2);
  }

  .ds-search--sm {
    --dsc-search-button-clear-size: var(--ds-sizing-5);
  }

  .ds-search--md {
    --dsc-search-button-clear-size: var(--ds-sizing-6);
  }

  .ds-search--lg {
    --dsc-search-button-clear-size: var(--ds-sizing-8);
  }

  .ds-search__error:empty {
    display: none;
  }

  .ds-search__label {
    min-width: min-content;
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-spacing-1);
    align-items: center;
  }

  .ds-search__field {
    display: flex;
    width: 100%;
    align-items: stretch;
    border-radius: var(--ds-border-radius-md);
    position: relative;
  }

  .ds-search__icon {
    position: absolute;
    height: 100%;
    z-index: 2;
    left: var(--ds-spacing-4);
    transform: scale(1.5);
    pointer-events: none;
  }

  [type='search']::-webkit-search-decoration,
  [type='search']::-webkit-search-cancel-button {
    appearance: none;
  }

  .ds-search__input {
    font: inherit;
    font-family: inherit;
    position: relative;
    box-sizing: border-box;
    flex: 0 1 auto;
    height: var(--ds-sizing-10);
    width: 100%;
    appearance: none;
    padding: 0 var(--ds-spacing-3);
    background: var(--ds-color-neutral-background-default);
    color: var(--ds-color-neutral-text-default);
    border: solid 1px var(--ds-color-neutral-border-default);
    border-radius: var(--ds-border-radius-md);
  }

  .ds-search__input.ds-search__input--with-search-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ds-search__input:disabled {
    cursor: not-allowed;
  }

  .ds-search__input[type='search']:focus-visible {
    z-index: 1;
  }

  .ds-search:has(.ds-search__input:disabled) {
    opacity: var(--ds-disabled-opacity);
  }

  .ds-search__clear-button {
    color: var(--ds-color-neutral-text-default);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: none;
    border: none;
    right: 0.6em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    height: var(--dsc-search-button-clear-size);
    width: var(--dsc-search-button-clear-size);
    border-radius: var(--ds-border-radius-md);
    font-size: 1.25rem;
    padding: 0;
    z-index: 2;
  }

  .ds-search--sm .ds-search__input {
    --dsc-search-button-clear-size: var(--ds-sizing-4);

    height: var(--ds-sizing-10);
    padding: 0 var(--ds-spacing-3);
    padding-right: 2.5em;
  }

  .ds-search--sm .ds-search__icon {
    padding-right: var(--ds-spacing-2);
  }

  .ds-search--md .ds-search__input {
    --dsc-search-button-clear-size: var(--ds-sizing-6);

    height: var(--ds-sizing-12);
    padding: 0 var(--ds-spacing-4);
    padding-right: 2.2em;
  }

  .ds-search--md .ds-search__icon {
    padding-right: var(--ds-spacing-3);
  }

  .ds-search--lg .ds-search__input {
    --dsc-search-button-clear-size: var(--ds-sizing-12);

    height: var(--ds-sizing-14);
    padding: 0 var(--ds-spacing-5);
    padding-right: 2em;
  }

  .ds-search--lg .ds-search__icon {
    padding-right: var(--ds-spacing-4);
  }

  .ds-search__input.ds-search__input--simple {
    padding-left: 2.4em;
  }

  .ds-search__error-message > .input:not(:focus-visible) {
    border-color: var(--ds-color-danger-border-default);
    box-shadow: inset 0 0 0 1px var(--ds-color-danger-border-default);
  }

  @media (hover: hover) and (pointer: fine) {
    .ds-search__input:not(:focus-visible, :disabled, [aria-disabled]):hover {
      border-color: var(--ds-color-accent-border-strong);
      box-shadow: inset 0 0 0 1px var(--ds-color-accent-border-strong);
    }

    .ds-search__clear-button:not(
        :focus-visible,
        :disabled,
        [aria-disabled]
      ):hover {
      background: var(--ds-color-accent-surface-hover);
    }
  }

  .ds-sr-only {
    visibility: hidden;
  }
</style>
