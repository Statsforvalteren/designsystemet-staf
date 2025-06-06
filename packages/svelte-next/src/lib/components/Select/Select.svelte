<script>
  import { run } from 'svelte/legacy';
  import { onMount, setContext } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  import SelectControl from './SelectControl.svelte';
  import SelectDropdown from './SelectDropdown.svelte';
  import { ParagraphWrapper } from '$lib';
  import { writable } from 'svelte/store';

  let inputId = `select-${uuidv4()}`;

  let {
    options = [],
    selected = $bindable(null),
    multiple = false,
    disabled = false,
    placeholder = 'Select an option...',
    description = '',
    size = 'medium',
    ariaLabel = 'Select',
    label,
    searchLabel = 'Search',
    hideSelected = false,
    hasFilter = false,
    closeMenuOnSelect = multiple ? false : true,
    error = '',
    readOnly = false,
    clearable = false,
    onChange = () => {},
    emptyOptionsPlaceholder = '',
    displayDropdownOnTop = false,
    dropdownGap = 5,
    maxDropdownHeight = 400,
    onOpen = () => {},
    zIndex = 1000,
    ...rest
  } = $props();

  let selectClasses = $state('select');
  let inputClasses = $state('textInput');
  let node = $state();
  let standardizedSize = $state();
  let isDropdownVisible = $state(false);
  let searchTerm = $state('');
  let filteredOptions = $state(options);
  let internalSelected = $state(normalizeSelected(selected));
  let isUpdating = $state(false);

  // Update internalSelected when selected changes
  $effect(() => {
    if (!isUpdating && selected !== undefined) {
      const newSelectedValue = normalizeSelected(selected);
      if (
        JSON.stringify(newSelectedValue) !== JSON.stringify(internalSelected)
      ) {
        internalSelected = newSelectedValue;
      }
    }
  });

  // Only update selected when internalSelected changes and we're not in an update cycle
  $effect(() => {
    if (!isUpdating && selected !== undefined) {
      const newValue = multiple
        ? internalSelected
        : (internalSelected[0] ?? null);
      if (JSON.stringify(newValue) !== JSON.stringify(selected)) {
        selected = newValue;
      }
    }
  });

  $effect(() => {
    // Set complete class strings instead of appending
    if (disabled) {
      selectClasses = 'select disabled';
      inputClasses = 'textInput disabled';
    } else if (readOnly) {
      selectClasses = 'select readOnly';
      inputClasses = 'textInput readOnly';
    } else if (error) {
      selectClasses = 'select error';
      inputClasses = 'textInput error';
    } else {
      selectClasses = 'select';
      inputClasses = 'textInput';
    }
  });

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

  const selectContext = writable({
    selected: internalSelected,
    error,
    multiple,
  });

  $effect(() => {
    selectContext.set({ selected: internalSelected, error, multiple });
  });

  setContext('selectContext-' + inputId, selectContext);

  function closeDropdown() {
    isDropdownVisible = false;
  }

  function normalizeSelected(selectedOptions) {
    if (!selectedOptions) return [];
    return Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];
  }

  function selectOption(option) {
    if (disabled || readOnly) return;

    isUpdating = true;
    try {
      const newSelected = multiple
        ? internalSelected.some((item) => item.value === option.value)
          ? internalSelected.filter((item) => item.value !== option.value)
          : [...internalSelected, option]
        : [option];

      internalSelected = newSelected;
      selected = multiple ? newSelected : newSelected[0];

      if (closeMenuOnSelect) {
        isDropdownVisible = false;
      }

      if (hasFilter) {
        handleFilterChange('');
      }

      onChange?.(multiple ? newSelected : newSelected[0]);
    } finally {
      isUpdating = false;
    }
  }

  function removeOption(optionToRemove) {
    if (readOnly) return;

    isUpdating = true;
    try {
      const newSelected = internalSelected.filter(
        (option) => option.value !== optionToRemove.value,
      );
      internalSelected = newSelected;
      selected = multiple ? newSelected : null;
    } finally {
      isUpdating = false;
    }
  }

  function clearAll() {
    if ((multiple || clearable) && !readOnly) {
      isUpdating = true;
      try {
        const newSelected = [];
        internalSelected = newSelected;
        selected = multiple ? newSelected : null;
      } finally {
        isUpdating = false;
      }
    }
  }

  function openDropdown() {
    if (!disabled && !readOnly) {
      isDropdownVisible = true;
      onOpen();
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

  function handleFilterChange(newFilter) {
    searchTerm = newFilter;
    filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
</script>

<div bind:this={node} class="select-container" aria-label={ariaLabel} {...rest}>
  {#if label}
    <div class="heading-wrapper select-container-spacing">
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
        <label class={`select-label`} for={inputId}>
          {label}
        </label>
      </ParagraphWrapper>
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
      {zIndex}
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
