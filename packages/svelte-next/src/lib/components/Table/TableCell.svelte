<script>
  let { onClick = () => {}, onclick = () => {}, children, ...rest } = $props();
</script>

<td
  onclick={(event) => {
    onclick?.(event);
    onClick?.(event);
  }}
  {...rest}
>
  {@render children?.()}
</td>
