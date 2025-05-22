<script>
  import { run } from 'svelte/legacy';

  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { v4 as uuidv4 } from 'uuid';

  

  
  /** @type {{Record<string, any>}} */
  let { size = 'md', disabled = false, children, ...rest } = $props();

  const uniqueId = uuidv4();
  const chipGroup = writable({
    size,
    uniqueId,
    disabled,
  });

  run(() => {
    setContext('chipGroup', chipGroup);
  });
</script>

<ul
  class={`
  ds-chip--group-container
  ds-chip--${size}`}
  {...rest}
>
  {@render children?.()}
</ul>

<style>
  .ds-chip--group-container {
    --dsc-chip-group-gap: var(--ds-spacing-2);

    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    flex-direction: row;
    gap: var(--dsc-chip-group-gap);
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .ds-chip--group-container.ds-chip--sm {
    --dsc-chip-group-gap: var(--ds-spacing-2);
  }

  .ds-chip--group-container.ds-chip--md {
    --dsc-chip-group-gap: var(--ds-spacing-2);
  }

  .ds-chip--group-container.ds-chip--lg {
    --dsc-chip-group-gap: var(--ds-spacing-2);
  }
</style>
