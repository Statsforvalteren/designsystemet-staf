<script lang="ts">
  import { ErrorMessage, Paragraph, ParagraphWrapper } from '../../../index.js';
  import { v4 as uuidv4 } from 'uuid';
  import CharacterCounter from '../CharacterCounter.svelte';

  let {
    label = '',
    description = '',
    size = 'medium' as 'small' | 'sm' | 'medium' | 'md' | 'large' | 'lg',
    hideLabel = false,
    readOnly = false,
    value = $bindable(),
    error = '',
    characterLimit = null,
    characterLimitLabel = null,
    onInput = () => {},
    class_ = '',
    ...rest
  } = $props();

  let componentId = uuidv4();
  let standardizedSize: 'sm' | 'md' | 'lg' = $state('md');
  let fontSizeClass = $state();

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
  let formFieldClasses = $derived(
    `ds-textarea ds-textarea--${standardizedSize} ${
      error ? 'ds-textarea--error' : ''
    } ${class_ || ''} ${fontSizeClass}`,
  );
  let labelClasses = $derived(
    `ds-textarea__label ${hideLabel ? 'ds-sr-only' : ''}`,
  );
  let descriptionClasses = $derived(
    `ds-textarea__description ${
      hideLabel ? 'ds-sr-only' : ''
    } ${fontSizeClass}`,
  );
  let textareaClasses = $derived(
    `ds-textarea__input ds-focus ${fontSizeClass}`,
  );
  let errorMessageClasses = $derived(
    `ds-textarea__error-message ${fontSizeClass}`,
  );
</script>

<ParagraphWrapper size={standardizedSize}>
  <div class={formFieldClasses}>
    {#if label}
      <label for={`textarea-${componentId}`} class={labelClasses}>
        {#if readOnly}
          <span
            aria-hidden="true"
            class="ds-textarea__readonly__icon"
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
      <Paragraph size={standardizedSize}>
        <span id="description" class={descriptionClasses}>
          {description}
        </span>
      </Paragraph>
    {/if}
    <textarea
      bind:value
      oninput={(event) => {
        onInput?.(event);
      }}
      readonly={readOnly}
      class={textareaClasses}
      id={`textarea-${componentId}`}
      aria-describedby="description"
      {...rest}
    ></textarea>
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
        <ErrorMessage size={standardizedSize}>{error}</ErrorMessage>
      </div>
    {/if}
  </div>
</ParagraphWrapper>

<style>
  .ds-textarea {
    display: grid;
    gap: var(--ds-spacing-2);
  }

  .ds-textarea__readonly__icon {
    height: 1.2em;
    width: 1.2em;
  }

  .ds-textarea__error-message:empty {
    display: none;
  }

  .ds-textarea__label {
    min-width: min-content;
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-spacing-1);
    align-items: center;
  }

  .ds-textarea__description {
    color: var(--ds-color-neutral-text-subtle);
    margin-top: calc(var(--ds-spacing-2) * -1);
  }

  .ds-textarea__input {
    font-family: inherit;
    position: relative;
    box-sizing: border-box;
    flex: 0 1 auto;
    min-height: 2.5em;
    width: 100%;
    appearance: none;
    padding: var(--ds-spacing-3);
    border: solid 1px var(--ds-color-neutral-border-default);
    border-radius: var(--ds-border-radius-md);
    resize: vertical;
    background: var(--ds-color-neutral-background-default);
    color: var(--ds-color-neutral-text-default);
  }

  .ds-textarea--sm .ds-textarea__input {
    padding: var(--ds-spacing-2);
  }

  .ds-textarea--md .ds-textarea__input {
    padding: var(--ds-spacing-3);
  }

  .ds-textarea--lg .ds-textarea__input {
    padding: var(--ds-spacing-4);
  }

  .ds-textarea:has(.ds-textarea__input:disabled) {
    opacity: var(--ds-disabled-opacity);
  }

  .ds-textarea__input:disabled {
    cursor: not-allowed;
  }

  .ds-textarea__input:read-only {
    background: var(--ds-color-neutral-background-subtle);
    border-color: var(--ds-color-neutral-border-strong);
  }

  .ds-textarea--error > .ds-textarea__input:not(:focus-visible) {
    border-color: var(--ds-color-danger-border-default);
    box-shadow: inset 0 0 0 1px var(--ds-color-danger-border-default);
  }

  @media (hover: hover) and (pointer: fine) {
    .ds-textarea__input:not(
        :focus-visible,
        :disabled,
        [aria-disabled],
        :read-only
      ):hover {
      border-color: var(--ds-color-accent-border-strong);
      box-shadow: inset 0 0 0 1px var(--ds-color-accent-border-strong);
    }
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
