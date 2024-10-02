<script>
  /**
   * Event handler for click event.
   * @type {(event: MouseEvent) => void}
   */
  export let onClick = () => {};
</script>

<td on:click on:click={onClick} {...$$restProps}>
  <slot />
</td>
