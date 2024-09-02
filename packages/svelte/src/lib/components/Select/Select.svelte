<script>
  // @ts-nocheck
  import { onMount, setContext } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  import SelectControl from './SelectControl.svelte';
  import SelectDropdown from './SelectDropdown.svelte';
  import { Paragraph } from '../..';
  import { writable } from 'svelte/store';

  /**
   * List of options for the select.
   * @type {SelectOption[]}
   */
  export let options = [];

  /**
   * Currently selected option(s).
   * @type {SelectOption |  SelectOption[] | null}
   */
  export let selected = null;

  /**
   * If true, allows multiple options to be selected.
   * @type {boolean}
   */
  export let multiple = false;

  /**
   * If true, disables any interaction with the select.
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Placeholder text for the select input.
   * @type {string}
   */
  export let placeholder = 'Select an option...';

  /**
   * Description text for the select.
   * @type {string}
   */
  export let description = '';

  /**
   * Size of the select.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * ARIA label for accessibility.
   * @type {string}
   */
  export let ariaLabel = 'Select';

  let inputId = `select-${uuidv4()}`;

  /**
   * Label for the select.
   * @type {string}
   */
  export let label;

  /**
   * ARIA label for the search input inside the select.
   * @type {string}
   */
  export let searchLabel = 'Search';

  /**
   * If true, hides selected options from the dropdown list.
   * @type {boolean}
   */
  export let hideSelected = false;

  /**
   * If true, enables the search/filter input inside the dropdown.
   * @type {boolean}
   */
  export let hasFilter = false;

  /**
   * If true, closes the dropdown menu when an option is selected. Default true if it's a single select, otherwise default is false.
   * @type {boolean}
   */
  export let closeMenuOnSelect = multiple ? false : true;

  /**
   * Error message to display.
   * @type {string}
   */
  export let error = '';

  /**
   * @type {boolean}
   */
  export let readOnly = false;

  /**
   * If true, allows options to be cleared. Only applies to single select.
   * @type {boolean}
   */
  export let clearable = false;

  /**
   * onChange handler for when a value has been choosen.
   * @type {Function}
   */
  export let onChange = () => {};

  /**
   * Informational text to display when no options are available.
   */
  export let emptyOptionsPlaceholder = '';

  /**
   * Whether the dropdown should be displayed on top of other content (hiding it) or if it displays above it (moving other content downwards).
   * @type {boolean}
   */
  export let displayDropdownOnTop = false;

  /**
   * Gap between the dropdown and the select input.
   * @type {number}
   */
  export let dropdownGap = 5;

  /**
   * Maximum height of the dropdown.
   * @type {number}
   */
  export let maxDropdownHeight = 400;

  $: isDropdownVisible = false;
  let selectClasses = 'select';
  let inputClasses = 'textInput';
  let node;
  let standardizedSize;
  let selectedStore = writable(normalizeSelected(selected));

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

  // Add other values here if necessary for reactivity
  const selectContext = writable({
    selected: $selectedStore,
    error,
    multiple,
  });

  setContext('selectContext-' + inputId, selectContext);
  $: {
    let newSelected = $selectedStore;
    if (!Array.isArray(selected)) {
      newSelected = normalizeSelected(selected);
    }
    selectContext.set({ selected: newSelected, error, multiple });
  }

  function closeDropdown() {
    isDropdownVisible = false;
  }

  function normalizeSelected(selectedOptions) {
    if (!selectedOptions) return [];
    return Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];
  }

  function selectOption(option) {
    selectedStore.update((currentSelected) => {
      if (multiple) {
        // If multiple selections are allowed
        if (Array.isArray(currentSelected)) {
          if (
            !currentSelected.some(
              (selectedOption) => selectedOption.value === option.value
            )
          ) {
            // Add the option if it's not already selected
            return [...currentSelected, option];
          } else {
            // Remove the option if it's already selected
            return currentSelected.filter(
              (selectedOption) => selectedOption.value !== option.value
            );
          }
        } else {
          // If currently selected is not an array, start a new array with the option
          return [option];
        }
      } else {
        if (hasFilter) {
          // Clear options filter on single selection
          handleFilterChange('');
        }
        // If only single selection is allowed
        // selected = option;
        return [option];
      }
    });
    if (multiple) {
      selected = $selectedStore;
    } else {
      selected = $selectedStore[0];
    }

    if (closeMenuOnSelect) {
      isDropdownVisible = false;
    }
    onChange();
  }

  function removeOption(optionToRemove) {
    selectedStore.update((currentSelected) => {
      if (multiple) {
        return currentSelected.filter(
          (option) => option.value !== optionToRemove.value
        );
      } else {
        return [];
      }
    });
    selected = $selectedStore;
  }

  function clearAll() {
    if ((multiple || clearable) && !readOnly) {
      selectedStore.set([]);
      selectContext.update((ctx) => ({ ...ctx, selected: [] }));
      selected = !multiple ? null : $selectedStore;
    }
  }

  function openDropdown() {
    if (!disabled && !readOnly) {
      isDropdownVisible = true;
    }
  }

  function handleOutsideClick(event) {
    if (isDropdownVisible && !event.composedPath().includes(node)) {
      closeDropdown();
    }
  }

  function handleSelectControlClick() {
    if (isDropdownVisible) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  $: if (disabled) {
    selectClasses = 'select disabled';
    inputClasses += ' disabled';
  } else if (readOnly) {
    selectClasses = 'select readOnly';
    inputClasses += ' readOnly';
  } else if (error) {
    selectClasses = 'select error';
    inputClasses += ' error';
  } else {
    selectClasses = 'select';
  }

  let searchTerm = '';
  $: filteredOptions = options;

  function handleFilterChange(newFilter) {
    searchTerm = newFilter;
    filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
</script>

<div
  bind:this={node}
  class="select-container"
  aria-label={ariaLabel}
  {...$$restProps}
>
  {#if label}
    <div class="heading-wrapper select-container-spacing">
      {#if readOnly}
        <span aria-hidden class={`padlock-icon icon-size--${standardizedSize}`}>
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
      <Paragraph as="div" {size}>
        <label class={`select-label`} for={inputId}>
          {label}
        </label>
      </Paragraph>
    </div>
  {/if}

  {#if description}
    <div class="select-container-spacing">
      <p class="select-description">{description}</p>
    </div>
  {/if}

  <SelectControl
    {inputId}
    {placeholder}
    {hasFilter}
    {readOnly}
    {removeOption}
    {multiple}
    {handleSelectControlClick}
    {handleFilterChange}
    {searchLabel}
    {disabled}
    {error}
    {clearAll}
    {clearable}
    {size}
  />

  <div class="select-container-spacing">
    <SelectDropdown
      {isDropdownVisible}
      options={filteredOptions}
      {selectOption}
      {hideSelected}
      {multiple}
      {inputId}
      {size}
      {emptyOptionsPlaceholder}
      {displayDropdownOnTop}
      {dropdownGap}
      {maxDropdownHeight}
    />
  </div>

  {#if error}
    <div class="error-message">{error}</div>
  {/if}
</div>

<style lang="scss">
  .select-container {
    display: flex;
    flex-direction: column;
    margin: var(--ds-spacing-1) 0;
    position: relative;
  }
  .select-container-spacing {
    margin-bottom: var(--ds-spacing-2);
  }
  .error-message {
    color: var(--ds-color-danger-text-subtle, #c22020);
  }
  .select-label {
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
  .select-description {
    margin: 0;
  }
  .heading-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
