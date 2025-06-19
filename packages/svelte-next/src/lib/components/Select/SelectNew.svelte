<script lang="ts">
  import { ParagraphWrapper } from '$lib/index.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import Chevron from './Chevron.svelte';
  import ClearButton from './ClearButton.svelte';
  import MultiSelectOption from './MultiSelectOption.svelte';
  import { v4 as uuidv4 } from 'uuid';

  type optionsType = {
    label: string;
    value: string;
    description?: string;
  };

  type SelectProps = {
    options?: Array<optionsType>;
    multiple?: boolean;
    placeholder?: string;
    selected?: Array<optionsType>;
    label?: string;
    readOnly?: boolean;
    disabled?: boolean;
    hasFilter?: boolean;
    hideSelected?: boolean;
    searchLabel?: string;
    description?: string;
    error?: string;
    size?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg';
    emptyOptionsPlaceholder?: string;
    dropdownGap?: number;
    maxDropdownHeight?: number;
  } & HTMLAttributes<HTMLDivElement>;

  let selectContainerId = `select-${uuidv4()}`;
  let inputId = `select-input-${uuidv4()}`;
  let selectContainer = $state<HTMLDivElement | null>(null);
  let isOpen = $state(false);
  let defaultSelected = $state([]);
  let {
    options = [],
    multiple = false,
    placeholder = 'Velg...',
    selected = $bindable(defaultSelected),
    label = '',
    readOnly = false,
    disabled = false,
    hasFilter = false,
    searchLabel = 'Søk',
    description = '',
    error = '',
    size = 'medium',
    hideSelected = false,
    emptyOptionsPlaceholder = 'Ingen alternativer tilgjengelige',
    dropdownGap = 0,
    maxDropdownHeight = 300,
    ...rest
  }: SelectProps = $props();

  let inputValue = $state('');
  let isFiltering = $state(false);
  let inputElement = $state();
  let searchTerm = $state('');
  let initialized = $state(false);

  $effect(() => {
    if (!multiple && selected && selected.length > 0) {
      inputValue = selected[0].label;
    }
    initialized = true;
  });

  $effect(() => {
    if (initialized) {
      if (!multiple && selected && selected.length === 1 && !isFiltering) {
        // Single select and one item is selected
        inputValue = selected[0].label;
      } else if (multiple || isFiltering) {
        // No change to inputValue, keep it as user's input
      } else {
        // Reset inputValue in other cases
        inputValue = '';
      }
    }
  });

  // Reset inputValue when selected changes
  $effect(() => {
    if (selected) {
      inputValue = '';
      filteredOptions = options;
    }
  });

  let standardizedSize = $derived(() => {
    switch (size) {
      case 'small':
      case 'sm':
        return 'sm';
      case 'medium':
      case 'md':
        return 'md';
      case 'large':
      case 'lg':
        return 'lg';
      default:
        return 'md';
    }
  });

  // Derived state for selected items
  const selectedItems = $derived(() => {
    if (!selected || !options) return [];

    if (multiple) {
      return options.filter((option) =>
        selected.some((s) => s.value === option.value),
      );
    } else {
      return options.filter(
        (option) => selected[0] && option.value === selected[0].value,
      );
    }
  });

  function toggleOption(option: optionsType) {
    if (multiple) {
      const isSelected = selected.some((s) => s.value === option.value);
      if (isSelected) {
        selected = selected.filter((s) => s.value !== option.value);
      } else {
        selected = [...selected, option];
      }
    } else {
      selected = [option];
      isOpen = false;
    }
  }

  function removeSelected(event: Event, value: string) {
    event.stopPropagation();
    selected = selected.filter((s) => s.value !== value);
  }

  function clearAll(event: Event) {
    event.stopPropagation();
    selected = [];
  }

  function toggleDropdown(event: Event) {
    // Handle keyboard events
    if (event instanceof KeyboardEvent) {
      if (!['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        return;
      }
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
      }
    }

    // Handle mouse events (clicks from button or label)
    if (event instanceof MouseEvent) {
      // If it's a click on the label and the dropdown is already open, close it
      const isLabelClick = (event.target as HTMLElement).classList.contains(
        'select-label',
      );
      if (isLabelClick && isOpen) {
        event.preventDefault();
        isOpen = false;
        return;
      }
    }

    isOpen = !isOpen;
  }

  // Close dropdown when clicking outside
  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectContainer &&
        !selectContainer.contains(event.target as Node) &&
        isOpen
      ) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      isOpen = false;
      return;
    }

    if (!isOpen) return;
    const currentIndex = options.findIndex(
      (opt) => selected?.some((s) => s.value === opt.value) || false,
    );
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex =
        currentIndex < options.length - 1 ? currentIndex + 1 : 0;
      if (!multiple) {
        selected = [options[nextIndex]];
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : options.length - 1;
      if (!multiple) {
        selected = [options[prevIndex]];
      }
    }
  }

  let debounceTimer: ReturnType<typeof setTimeout>;
  function updateInputValue(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    isFiltering = true;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      inputValue = value;
      handleFilterChange(value);
    }, 300);
  }

  function handleBlur() {
    isFiltering = false;
  }

  let filteredOptions = $state<optionsType[]>([]);

  $effect(() => {
    if (!searchTerm.trim()) {
      filteredOptions = options;
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      filteredOptions = options.filter((option) => {
        if (typeof option === 'object' && option !== null) {
          return option.label.toLowerCase().includes(searchTermLower);
        }
        return String(option).toLowerCase().includes(searchTermLower);
      });
    }
  });

  function handleFilterChange(newFilter: string) {
    console.log('Filter changed:', newFilter);
    searchTerm = newFilter;
  }

  function isOptionSelected(option: optionsType) {
    if (multiple) {
      return selected?.some((s) => s.value === option.value) || false;
    } else {
      return selected?.length > 0 ? selected[0].value === option.value : false;
    }
  }
</script>

<div class="select-container" aria-label={'Select'} {...rest}>
  {#if label}
    <div class="heading-wrapper select-container-spacing">
      {#if readOnly}
        <span
          aria-hidden="true"
          class={`padlock-icon icon-size--${standardizedSize()}`}
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
        <button
          type="button"
          class="label-button"
          onclick={toggleDropdown}
          onkeydown={toggleDropdown}
          aria-expanded={isOpen}
          aria-controls={selectContainerId}
        >
          <label class={`select-label`} for={selectContainerId}>
            {label}
          </label>
        </button>
      </ParagraphWrapper>
    </div>
  {/if}
  {#if description}
    <div>
      <p class="select-description">{description}</p>
    </div>
  {/if}

  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    bind:this={selectContainer}
    class="select-container"
    onkeydown={handleKeyDown}
    role="group"
    aria-roledescription="Select"
  >
    <button
      id={selectContainerId}
      type="button"
      class="field {readOnly ? 'read-only' : ''} {error
        ? 'error'
        : ''} {disabled ? 'disabled' : ''}"
      onclick={readOnly || disabled ? undefined : toggleDropdown}
      onkeydown={readOnly || disabled ? undefined : toggleDropdown}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls="select-options"
    >
      {#if selectedItems().length > 0}
        <div class="input-container">
          <div class="selected-options">
            {#each selectedItems() as item}
              <span>
                {#if multiple}
                  <MultiSelectOption
                    option={item}
                    removeOption={(e: Event) => removeSelected(e, item.value)}
                    {readOnly}
                    {disabled}
                    {size}
                  />
                {:else if !hasFilter || selected.length >= 0}
                  <span class="option-label">
                    {item.label}
                  </span>
                {/if}
              </span>
            {/each}
            {#if !(disabled || readOnly) && (hasFilter || selected.length === 0)}
              <input
                bind:this={inputElement}
                bind:value={inputValue}
                oninput={updateInputValue}
                onblur={handleBlur}
                class="textInput {hasFilter ? '' : 'no-filter'}"
                id={inputId}
                placeholder={multiple &&
                !hasFilter &&
                selected &&
                selected.length > 0
                  ? ''
                  : placeholder}
                aria-label={searchLabel}
                readonly={readOnly || (!multiple && !hasFilter)}
              />
            {/if}
          </div>
          {#if multiple && selectedItems().length > 0 && !readOnly && !disabled}
            <ClearButton
              handleClick={clearAll}
              deleteButtonLabel="Fjern alle"
              {disabled}
              {readOnly}
              {size}
            />
            <div class="separator {disabled ? 'disabled' : ''}"></div>
          {/if}
        </div>
      {:else}
        <div class="input-container">
          <input
            bind:this={inputElement}
            bind:value={inputValue}
            oninput={updateInputValue}
            onblur={handleBlur}
            class="textInput {hasFilter ? '' : 'no-filter'}"
            id={inputId}
            placeholder={multiple &&
            !hasFilter &&
            selected &&
            selected.length > 0
              ? ''
              : placeholder}
            aria-label={searchLabel}
            readonly={readOnly || (!multiple && !hasFilter)}
          />
        </div>
      {/if}
      <div class={`chevron-container ${disabled ? 'disabled' : ''}`}>
        <Chevron />
      </div>
    </button>

    {#if isOpen}
      <div
        class="options-list"
        role="listbox"
        id="select-options"
        aria-multiselectable={multiple}
        style={`margin-top: ${dropdownGap}px; max-height: ${maxDropdownHeight}px;`}
      >
        {#if filteredOptions.length === 0}
          <li class="option-item-no-hover" role="option" aria-selected="false">
            <div class="option-content">
              <div class="option-label">{emptyOptionsPlaceholder}</div>
            </div>
          </li>
        {/if}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        {#each filteredOptions as option (option.value)}
          {#if !(hideSelected && isOptionSelected(option))}
            <!-- svelte-ignore a11y_interactive_supports_focus -->
            <div
              class="option-item"
              onclick={() => toggleOption(option)}
              role="button"
            >
              {#if multiple}
                <div class="option-text">
                  <div class="option-item-checkbox">
                    <div class="checkbox-container">
                      <input
                        type="checkbox"
                        checked={selected?.some(
                          (s) => s.value === option.value,
                        )}
                        readonly
                        tabindex="-1"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="option-label-description">
                      <div class="option-label">{option.label}</div>
                      {#if option.description}
                        <div class="option-description">
                          {option.description}
                        </div>
                      {/if}
                    </div>
                  </div>
                </div>
              {:else}
                <div class="option-text">
                  <div class="option-label">{option.label}</div>
                  {#if option.description}
                    <div class="option-description">{option.description}</div>
                  {/if}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
  {#if error}
    <div class="error-message">{error}</div>
  {/if}
</div>

<style lang="scss">
  .select-input {
    width: 100%;
    border: 1px solid var(--ds-color-accent-9);
    border-radius: var(--ds-border-radius-full, 9999px);
    padding: var(--ds-spacing-2);
    display: flex;
    align-items: center;
    min-height: 40px;
    background: white;
    cursor: pointer;
    text-align: left;
  }

  .select-input:focus {
    outline: 2px solid var(--ds-color-accent-9);
    outline-offset: 1px;
  }

  .placeholder {
    color: #666;
    margin-left: var(--ds-spacing-2);
  }

  .chevron-container {
    transition: transform 0.2s;
  }

  :global(.select-container:has(.field[aria-expanded='true']))
    .chevron-container {
    transform: rotate(180deg);
  }

  .options-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--ds-color-accent-9);
    border-radius: 4px;
    margin-top: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10001;
    display: flex;
    flex-direction: column;
  }

  .option-label-description {
    display: flex;
    flex-direction: column;
    margin-left: var(--ds-spacing-2);
  }

  .option-item-checkbox {
    display: flex;
    align-items: center;
  }

  .option {
    width: 100%;
    padding: var(--ds-spacing-2);
    display: flex;
    align-items: center;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .option:hover {
    background-color: var(--ds-color-accent-9);
    color: #fff;
  }

  .option:focus {
    outline: 2px solid var(--ds-color-accent-9);
    background-color: var(--ds-color-accent-9);
    color: #fff;
  }

  .selected-items {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-spacing-1);
    width: 100%;
  }

  .selected-tag {
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: var(--ds-border-radius-full, 9999px);
    background: var(--ds-color-accent-9);
    padding: var(--ds-spacing-1) var(--ds-spacing-2);
    gap: var(--ds-spacing-2);
    font-size: 0.9em;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0 var(--ds-spacing-2);
    font-size: 1.2em;

    &:hover {
      color: var(--ds-global-red-12);
    }
  }

  .clear-all {
    background: none;
    border: none;
    color: var(--ds-color-accent-9);
    cursor: pointer;
    font-size: 0.8em;
    padding: var(--ds-spacing-1) var(--ds-spacing-2);
    margin-left: var(--ds-spacing-1);
    border-radius: var(--ds-border-radius-full, 9999px);

    &:hover {
      background-color: var(--ds-color-accent-9);
      color: #fff;
    }
  }

  .select-container {
    display: flex;
    flex-direction: column;
    position: relative;
    font-family: inherit;
    font-size: inherit;
  }
  .select-container-spacing {
    margin-bottom: var(--ds-spacing-2);
  }
  .error-message {
    color: var(--ds-color-danger-text-subtle, #c22020);
    margin-top: 0.5rem;
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

  .field {
    background-color: var(--ds-color-accent-1, #ffffff);
    display: flex;
    border: 1px solid var(--ds-color-accent-9, #00244e);
    border-radius: 3px;
    background: fff;
    align-items: center;
    flex-direction: row;
    font-family: inherit;
    font-size: var(--font_size);
    min-height: 2.25rem;
    padding: 0.25rem 0;
    &:hover {
      cursor: pointer;
      &.read-only,
      &.disabled {
        cursor: not-allowed;
      }
    }

    &.disabled {
      border: 1px solid lightgrey;
    }
    &.error {
      border: 1px solid var(--ds-color-danger-text-subtle, #c22020);
    }
    &.read-only {
      border: 1px solid rgb(194, 194, 194);
      background-color: rgb(235, 235, 235);
    }
  }
  .separator {
    width: 1px;
    align-self: stretch;
    background: var(--ds-color-accent-9, #00244e);
    margin-right: 0.25rem;
    margin-left: 0.125rem;
    &.disabled {
      background: lightgrey;
    }
  }

  .input-container {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    overflow: hidden;
    padding: 0 var(--ds-spacing-1);
  }

  .textInput {
    background: transparent;
    border: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: var(--font_size);
    line-height: var(--line-height);
    min-height: 30px;
    outline: none;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    width: 100%;
    &.no-filter {
      cursor: pointer;
    }
  }

  .tag-container {
    margin-right: 10px;
  }

  .chevron-container {
    height: 100%;
    display: flex;
    align-items: center;
    gap: var(--ds-spacing-2);
    margin-right: var(--ds-spacing-1);

    &.disabled {
      color: lightgrey;
    }
  }

  .selected-options {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-spacing-2);
    width: 100%;
  }

  .label-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .option-item,
  .option-item-no-hover {
    display: flex;
    padding: 9px 12px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    list-style: none;
    margin: 0 10px;
  }

  .option-item:hover {
    background: var(--ds-color-brand1-4, #c5d3e9);
    border-radius: var(--ds-border-radius-md, 4px);
    border-left: 5px solid var(--ds-color-accent-8, #335071);
    cursor: pointer;
    padding: 9px 12px 9px 7.5px;
  }

  .option-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .option-label {
    color: var(--ds-color-neutral-9, #1e2b3c);
    font-weight: 400;
    line-height: 130%;
    margin-right: auto;
    margin-left: var(--ds-spacing-2);
  }

  .option-description {
    margin-right: auto;
    margin-left: var(--ds-spacing-2);
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 var(--ds-spacing-2);
  }

  input[type='checkbox'] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #000;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 5px;
    position: relative;
  }

  input[type='checkbox']:checked {
    background-color: var(--ds-color-accent-9);
    border-color: #0056b3;
  }
  input[type='checkbox']:checked::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 5px;
    width: 6px;
    height: 12px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>
