<script>
  import Cross from './Cross.svelte';

  export let handleClick;
  export let deleteButtonLabel = 'Delete';
  export let disabled;
  export let readOnly;
  //svelte-ignore unused-export-let
  export let size = 'medium';
</script>

<button
  on:click={disabled ? null : (e) => handleClick(e)}
  aria-label={deleteButtonLabel}
  class={`delete-button clear-all ${disabled ? 'disabled' : ''} ${
    readOnly ? 'read-only' : ''
  }`}
  {disabled}><Cross /></button
>

<style>
  .delete-button {
    --delete-cross-box-size: 25px;
    --delete-cross-size: 12px;
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

    &:disabled {
      color: lightgrey;
      cursor: not-allowed;
      background-color: transparent;
      &:disabled {
        color: lightgrey;
      }
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
