<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /**
   * onchange handler for the tabs component.
   */
  export let onChange = (value) => {};

  /**
   * Sets the default value of the tabs component.
   * @type {string}
   */
  export let defaultValue = undefined;

  /**
   * Controls the size of the tabs component. Defaults to `medium`.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

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

<div class={`ds-tabs--${size}`} {...$$restProps}>
  <slot />
</div>
