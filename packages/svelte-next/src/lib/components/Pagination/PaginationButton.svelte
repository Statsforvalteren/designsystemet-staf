<script>
  import Button from '../Button/Button.svelte';
  import { createEventDispatcher } from 'svelte';

  let props = $props();
  let isActive = props.isActive ?? false;
  let size = props.size ?? 'md';
  let ariaLabel = props.ariaLabel ?? '';
  let { children, ...rest } = props;

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    dispatch('click', event);
  }
</script>

<Button
  {...rest}
  variant={isActive ? 'primary' : 'tertiary'}
  {size}
  aria-label={ariaLabel}
  onclick={handleClick}
>
  {@render children?.()}
</Button>
