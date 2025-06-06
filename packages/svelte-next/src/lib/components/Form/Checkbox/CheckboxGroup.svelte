<script>
  import { ErrorMessage, ParagraphWrapper } from '../../../index.js';
  import { setContext } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  /** @type {{legend?: string, description?: string, readOnly?: boolean, disabled?: boolean, error?: string, value?: string[], defaultValue?: string[], required?: boolean, size?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg', hideLegend?: boolean, children?: import('svelte').Snippet}} */
  let {
    legend = '',
    description = '',
    readOnly = false,
    disabled = false,
    error = '',
    value = $bindable([]),
    defaultValue = [],
    required = false,
    size = 'medium',
    hideLegend = false,
    children,
  } = $props();

  const uniqueId = uuidv4();

  // Create individual reactive states
  let readOnlyState = $state(readOnly);
  let disabledState = $state(disabled);
  let sizeState = $state(size);
  let valueState = $state(value);
  let errorState = $state(error);
  let requiredState = $state(required);

  // Create derived values that will automatically update
  const storeValue = $derived({
    readOnly: readOnlyState,
    disabled: disabledState,
    size: sizeState,
    value: valueState,
    error: errorState,
    uniqueId,
    required: requiredState,
  });

  // Create store for context that follows Svelte's store contract
  const groupStore = {
    subscribe(fn) {
      fn(storeValue);
      // Return a cleanup function
      return () => {};
    },
  };

  // Keep reactive states in sync with props
  readOnlyState = readOnly;
  disabledState = disabled;
  sizeState = size;
  valueState = value;
  errorState = error;
  requiredState = required;

  // Set the store in context
  setContext('checkboxGroup', groupStore);

  let standardizedSize = $derived(
    size === 'small' || size === 'sm'
      ? 'sm'
      : size === 'large' || size === 'lg'
        ? 'lg'
        : 'md',
  );

  // Initialize valueState with defaultValue if provided
  $effect.pre(() => {
    if (defaultValue && defaultValue.length > 0) {
      valueState = [...defaultValue];
      value = [...defaultValue];
    }
  });

  // Keep value and valueState in sync
  $effect(() => {
    if (JSON.stringify(valueState) !== JSON.stringify(value)) {
      value = [...valueState];
    }
  });

  // Update groupStore when any dependency changes
  $effect(() => {
    const newStoreValue = {
      readOnly: readOnlyState,
      disabled: disabledState,
      size: sizeState,
      value: valueState,
      error: errorState,
      uniqueId,
      required: requiredState,
    };

    Object.assign(groupStore, newStoreValue);
  });

  function handleCheckboxChange(change) {
    if (
      change.target instanceof HTMLInputElement &&
      change.target.type === 'checkbox'
    ) {
      const newValue = change.target.checked
        ? [...valueState, change.target.value]
        : valueState.filter((v) => v !== change.target.value);

      valueState = newValue;
      value = newValue;
    }
  }

  let legendWrapperClasses = $derived(
    `legend-wrapper ${hideLegend ? 'visually-hidden' : ''}`,
  );
  let descriptionClasses = $derived(
    `ds-checkbox__description ${hideLegend ? 'visually-hidden' : ''}`,
  );

  // Context is already set above
</script>

<fieldset
  id={`group-${uniqueId}`}
  aria-labelledby={`label-${uniqueId}`}
  onchange={handleCheckboxChange}
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
  <div class="ds-checkbox__group">
    {@render children?.()}
  </div>
  {#if error}
    <ParagraphWrapper {size}>
      <ErrorMessage {size}>{error}</ErrorMessage>
    </ParagraphWrapper>
  {/if}
</fieldset>

<style>
  .ds-checkbox__group {
    margin: var(--ds-spacing-4) 0;
    display: flex;
    flex-direction: column;
    gap: var(--ds-spacing-5);
    width: fit-content;
  }
  .ds-checkbox__description {
    margin-top: var(--ds-spacing-1);
    color: var(--ds-color-neutral-text-subtle);
  }
  .ds-checkbox:has(.ds-checkbox__input:disabled) > .ds-checkbox__description {
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
