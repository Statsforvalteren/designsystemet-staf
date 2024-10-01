<script>
  /**
   * Enable or disable the row as clickable, if clickable the row will have a pointer cursor and a hover effect.
   * @type {boolean}
   */
  export let clickable = false;

  /**
   * Function to call when the row is clicked. Works only if clickable is set to true.
   * @type {() => void}
   */
  export let onClick = () => {};

  function handleClick() {
    if (clickable) {
      onClick();
    }
  }
</script>

<tr
  {...$$restProps}
  on:click
  on:click={handleClick}
  class={`${clickable ? 'clickable' : ''}`}
>
  <slot />
</tr>

<style>
  .clickable {
    cursor: pointer;
  }
  :global(.clickable:hover > td) {
    background-color: var(--ds-color-neutral-background-subtle);
  }
</style>
