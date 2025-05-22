<script>
  import Cross from './Cross.svelte';

  

  

  

  

  //svelte-ignore export_let_unused
  /** @type {{option: any, removeOption: Function, readOnly: boolean, deleteButtonLabel?: string, disabled: any, size?: string}} */
  let {
    option,
    removeOption,
    readOnly,
    deleteButtonLabel = 'Slett',
    disabled,
    size = 'medium'
  } = $props();
</script>

<span
  class={`multiSelectedOption ${disabled ? 'disabled' : ''} ${
    readOnly ? 'read-only' : ''
  }`}
>
  <span class="optionLabel">{option.label}</span>
  <span
    class={`delete-button-container ${disabled ? 'disabled' : ''} ${
      readOnly ? 'read-only' : ''
    }`}
  >
    <button
      onclick={disabled || readOnly
        ? null
        : (e) => {
            e.stopPropagation();
            removeOption(option);
          }}
      aria-label={`${deleteButtonLabel} ${option.label}`}
      class={`delete-button ${disabled ? 'disabled' : ''} ${
        readOnly ? 'read-only' : ''
      }`}><Cross /></button
    >
  </span>
</span>

<style lang="scss">
  .multiSelectedOption {
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: var(--ds-border-radius-full, 9999px);
    background: var(--ds-color-accent-9);
    padding: var(--ds-spacing-1) var(--ds-spacing-2);
    gap: var(--ds-spacing-2);
    --interactive-element-cursor: pointer;
    position: relative;
    &.disabled {
      background-color: lightgrey;
    }
  }

  .optionLabel {
    flex-grow: 1;
    padding-right: var(--ds-spacing-6);
  }

  .delete-button-container {
    position: absolute;
    right: 0;
    width: 20px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: var(--ds-spacing-2);
    border-radius: 0 var(--ds-border-radius-full, 9999px)
      var(--ds-border-radius-full, 9999px) 0;

    &:hover {
      background-color: var(--ds-global-red-12);
      cursor: pointer;
    }
    &.disabled {
      &:hover {
        background-color: inherit;
        cursor: not-allowed;
      }
    }

    &.read-only {
      &:hover {
        background-color: inherit;
        cursor: not-allowed;
      }
    }
  }

  .delete-button {
    --delete-cross-box-size: 27px;
    --delete-cross-size: 12px;
    color: #fff;
    background: transparent;
    border: none;
    cursor: var(--interactive-element-cursor);
    height: var(--delete-cross-box-size);
    width: var(--delete-cross-box-size);
    padding: calc(
      (var(--delete-cross-box-size) - var(--delete-cross-size)) / 2
    );

    position: relative;
    right: -2px;
    padding-top: 6px;
    border: none;
    margin: 0;

    &.disabled {
      &:hover {
        cursor: not-allowed;
      }
    }
    &.read-only {
      &:hover {
        cursor: not-allowed;
      }
    }
  }
</style>
