<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let {
    onChange = (value) => {},
    defaultValue = undefined,
    size = 'medium',
    children,
    ...rest
  } = $props();

  let store = {
    selectedTab: writable('1'),
    select: (i) => {
      store.selectedTab.set(i);
      onChange(i);
    },
    tabSize: writable('medium'),
  };

  if (defaultValue) {
    store.selectedTab.set(defaultValue);
  }
  store.tabSize.set(size);
  setContext('tabsStore', store);
</script>

<div class={`ds-tabs--${size}`} {...rest}>
  {@render children?.()}
</div>
