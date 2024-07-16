<script>
  import { Paragraph } from '../Typography';
  import { getContext } from 'svelte';

  /**
   * Enables check mark icon
   * @type {boolean}
   */
  export let checkmark = false;

  /**
   * Changes Chip size and gap between chips. Defaults to `medium`.
   * @type {'sm' | 'md' | 'lg'}
   */
  export let size = 'md';

  /**
   * Toggles `aria-pressed` and visual-changes
   * @type {boolean}
   */
  export let selected = false;

  /**
   * Toggles hover and focus effects. Defaults to `false`.
   * @type {boolean}
   */
  export let disabled = false;

  const shouldDisplayCheckmark = checkmark && selected;
  const chipGroup = getContext('chipGroup');
  let groupSize;
  let groupDisabled;

  $: if ($chipGroup) {
    groupSize = $chipGroup.size;
    groupDisabled = $chipGroup.disabled;
  }

  $: chipClasses = `ds-focus ds-chip--button ds-chip--${groupSize || size} ${
    shouldDisplayCheckmark ? 'ds-chip--spacing' : ''
  } ${groupDisabled || disabled ? 'ds-chip--no-effects' : ''}`;
</script>

<button
  type="button"
  aria-pressed={selected}
  class={chipClasses}
  {...$$restProps}
>
  <Paragraph asChild size={groupSize || size} variant="short">
    <span class="ds-chip__label">
      {#if shouldDisplayCheckmark}
        <div
          class="ds-chip__checkmark-icon"
          aria-hidden
          style="display: flex; align-items: center;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      {/if}
      <slot />
    </span>
  </Paragraph>
</button>

<style>
  .ds-chip--no-effects {
    pointer-events: none;
  }
  .ds-chip--button {
    --dsc-chip-height: var(--ds-sizing-7);
    --dsc-chip-padding: 0 var(--ds-spacing-3);
    --dsc-chip-background: var(--ds-color-accent-surface-default);
    --dsc-chip-text-color: var(--ds-color-neutral-text-default);
    --dsc-chip-border: var(--ds-color-accent-border-subtle);
    --dsc-chip-border-radius: var(--ds-border-radius-full);

    background: var(--dsc-chip-background);
    padding: var(--dsc-chip-padding);
    min-height: var(--dsc-chip-height);
    border-radius: var(--dsc-chip-border-radius);
    border: 1px solid var(--dsc-chip-border);
    color: var(--dsc-chip-text-color);
    text-decoration: none;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
  }

  .ds-chip--button:disabled,
  .ds-chip--button[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: var(--ds-disabled-opacity);
  }

  .ds-chip--button .ds-chip__label {
    color: inherit;
    line-height: normal;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: var(--ds-spacing-2);
  }

  .ds-chip--spacing {
    padding-left: var(--ds-spacing-2) !important;
  }

  .ds-chip--sm .ds-chip__checkmark-icon {
    height: var(--ds-sizing-5);
    width: auto;
  }

  .ds-chip--md .ds-chip__checkmark-icon {
    height: 24px;
    width: auto;
  }

  .ds-chip--lg .ds-chip__checkmark-icon {
    height: 26px;
    width: auto;
  }

  /* Only use hover for non-touch devices to prevent sticky-hovering */
  @media (hover: hover) and (pointer: fine) {
    .ds-chip--button:not(
        :disabled,
        [aria-disabled='true'],
        .ds-chip--no-effects
      ):hover {
      --dsc-chip-background: var(--ds-color-accent-surface-hover);
      --dsc-chip-text-color: var(--ds-color-neutral-text-default);
      --dsc-chip-border: var(--ds-color-accent-border-default);

      cursor: pointer;
    }

    .ds-chip--button:not(
        :disabled,
        [aria-disabled='true'],
        .ds-chip--no-effects
      ):is([aria-pressed='true']):hover {
      --dsc-chip-background: var(--ds-color-accent-surface-hover);
      --dsc-chip-text-color: var(--ds-color-neutral-text-default);
    }

    .ds-chip--removable:not(
        :disabled,
        [aria-disabled='true'],
        .ds-chip--no-effects
      ):hover,
    .ds-chip--removable:not(:disabled, [aria-disabled='true']):focus {
      --dsc-removable-background: var(--ds-color-accent-base-hover);
      --dsc-removable-chip-xmark-color: var(
        --ds-color-neutral-contrast-default
      );
    }
  }

  .ds-chip--button:is([aria-pressed='true']),
  .ds-chip--button:not(:disabled, [aria-disabled='true']):active,
  .ds-chip--removable:is([aria-pressed='true']),
  .ds-chip--removable:not(:disabled, [aria-disabled='true']):active {
    --dsc-chip-background: var(--ds-color-accent-base-active);
    --dsc-chip-text-color: var(--ds-color-neutral-contrast-default);
    --dsc-chip-border: var(--ds-color-accent-base-active);
    --dsc-removable-background: var(--ds-color-accent-base-active);
    --dsc-removable-text-color: var(--ds-color-neutral-contrast-default);
  }

  .ds-chip--sm {
    --dsc-chip-height: var(--ds-sizing-7);
    --dsc-chip-padding: 0 var(--ds-spacing-3);
    --dsc-removable-chip-xmark-size: var(--ds-sizing-5);
    --dsc-removable-chip-xmark-padding_right: var(--ds-spacing-1);
  }

  .ds-chip--md {
    --dsc-chip-height: var(--ds-sizing-8);
    --dsc-chip-padding: 0 var(--ds-spacing-3);
    --dsc-removable-chip-xmark-size: var(--ds-sizing-6);
    --dsc-removable-chip-xmark-padding_right: var(--ds-spacing-2);
  }

  .ds-chip--lg {
    --dsc-chip-height: var(--ds-sizing-9);
    --dsc-chip-padding: 0 var(--ds-spacing-4);
    --dsc-removable-chip-xmark-size: var(--ds-sizing-7);
    --dsc-removable-chip-xmark-padding_right: var(--ds-spacing-3);
  }
</style>
