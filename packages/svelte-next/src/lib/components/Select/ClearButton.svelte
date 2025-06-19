<script>
  import Cross from './Cross.svelte';

  /** @type {{handleClick: any, deleteButtonLabel?: string, disabled: any, readOnly: any, size?: string}} */
  let {
    handleClick,
    deleteButtonLabel = 'Delete',
    disabled,
    readOnly,
    size = 'medium',
  } = $props();
</script>

<span
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!disabled) handleClick(e);
    }
  }}
  role="button"
  tabindex={disabled ? -1 : 0}
  onclick={disabled ? null : (e) => handleClick(e)}
  aria-label={deleteButtonLabel}
  class={`delete-button clear-all ${disabled ? 'disabled' : ''} ${
    readOnly ? 'read-only' : ''
  }`}
  aria-disabled={disabled}><Cross /></span
>

<style>
  .delete-button {
    --delete-cross-box-size: 25px;
    --delete-cross-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    height: var(--delete-cross-box-size);
    padding: calc(
      (var(--delete-cross-box-size) - var(--delete-cross-size)) / 2.5
    );
    width: var(--delete-cross-box-size);

    color: inherit;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-left: auto;
    background-color: transparent;
    &:hover {
      background-color: var(--ds-global-red-12);
      color: white;
    }

    &.disabled {
      color: lightgrey;
      cursor: not-allowed;
      background-color: transparent;
    }

    &.read-only {
      &:hover {
        cursor: not-allowed;
        background-color: transparent;
        color: inherit;
      }
    }
  }
</style>
