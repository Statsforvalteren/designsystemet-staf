<script>
  export let clickable = false;

  export let onClick = () => {};

  function handleClick() {
    if (clickable) {
      onClick();
    }
  }
</script>

<tr
  {...$$restProps}
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
