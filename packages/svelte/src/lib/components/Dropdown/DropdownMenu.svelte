<script>
  import { onMount, setContext } from 'svelte';
  import MenuGroup from './DropdownMenuGroup.svelte';
  import MenuItem from './DropdownMenuItem.svelte';
  import Divider from './Divider.svelte';
  import { v4 as uuidv4 } from 'uuid';

  const C = {
    MenuGroup,
    MenuItem,
    Divider,
  };

  /**
   * Callback function when dropdown closes.
   */
  export let onClose = () => {};

  /**
   * Sets the placement of the dropdown menu relative to the anchor element.
   * @type {'bottom-start' | 'bottom-end' | 'bottom' | 'top' | 'top-start' | 'top-end' 
   | 'left' | 'right' | 'right-start' | 'right-end' | 'left-start' | 'left-end'}
   */
  export let placement = 'bottom-start';

  /**
   * Controls the size of the dropdown component.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  /**
   * The HTML element that the dropdown menu should be positioned relative to.
   * Be aware that if you want to use a Svelte component as the anchor element, you will need to wrap it in a `<div>` element.
   * @type {HTMLElement}
   */
  export let anchorEl = null;

  /**
   * The gap between the anchor element and the dropdown menu.
   * @type {number}
   */
  export let gap = 0;

  const uniqueId = `dropdownMenu-${uuidv4()}`;
  let standardizedSize;

  switch (size) {
    case 'small':
    case 'sm':
      standardizedSize = 'sm';
      break;
    case 'medium':
    case 'md':
      standardizedSize = 'md';
      break;
    case 'large':
    case 'lg':
      standardizedSize = 'lg';
      break;
    default:
      standardizedSize = 'md';
      break;
  }

  $: menuVisible = false;

  onMount(() => {
    if (anchorEl) {
      anchorEl.addEventListener('click', runTrigger);
    }

    return () => {
      anchorEl.removeEventListener('click', runTrigger);
    };
  });

  function runTrigger() {
    setPlacement();
    menuVisible = !menuVisible;
    if (!menuVisible) {
      onClose();
    }
  }
  let parentProps = { standardizedSize };
  let top = 0;
  let left = 0;
  let dropdown = null;
  setContext('parentProps', parentProps);

  function onWindowClick(e) {
    if (menuVisible == false) return;
    if (
      dropdown.contains(e.target) == false &&
      anchorEl.contains(e.target) == false
    ) {
      menuVisible = false;
      onClose();
    }
  }

  function setPlacement() {
    if (anchorEl) {
      let rect = anchorEl.getBoundingClientRect();
      if (placement == 'bottom-start') {
        top = rect.height + gap;
        left = 0;
      } else if (placement == 'bottom-end') {
        top = rect.height + gap;
        left = rect.width - dropdown.getBoundingClientRect().width;
      } else if (placement == 'bottom') {
        top = rect.height + gap;
        left = rect.width / 2 - dropdown.getBoundingClientRect().width / 2;
      } else if (placement == 'top') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = rect.width / 2 - dropdown.getBoundingClientRect().width / 2;
      } else if (placement == 'top-start') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = 0;
      } else if (placement == 'top-end') {
        top = -dropdown.getBoundingClientRect().height - gap;
        left = rect.width - dropdown.getBoundingClientRect().width;
      } else if (placement == 'left') {
        top = rect.height / 2 - dropdown.getBoundingClientRect().height / 2;
        left = -dropdown.getBoundingClientRect().width - gap;
      } else if (placement == 'right') {
        top = rect.height / 2 - dropdown.getBoundingClientRect().height / 2;
        left = rect.width + gap;
      } else if (placement == 'right-start') {
        top = 0;
        left = rect.width + gap;
      } else if (placement == 'right-end') {
        top = rect.height - dropdown.getBoundingClientRect().height;
        left = rect.width + gap;
      } else if (placement == 'left-start') {
        top = 0;
        left = -dropdown.getBoundingClientRect().width - gap;
      } else if (placement == 'left-end') {
        top = rect.height - dropdown.getBoundingClientRect().height;
        left = -dropdown.getBoundingClientRect().width - gap;
      }
    }
  }
</script>

<svelte:window on:click={onWindowClick} />

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul
  id={uniqueId}
  role="menu"
  bind:this={dropdown}
  class={`ds-dropdownmenu ds-dropdownmenu--${standardizedSize}`}
  style="top:{top}px; left:{left}px; {menuVisible
    ? 'visibility:visible;'
    : 'visibility:hidden;'}"
  on:click={(event) => {
    event.stopPropagation();
  }}
>
  <slot {C} />
</ul>

<style>
  .ds-dropdownmenu {
    position: absolute;
    padding: var(--ds-spacing-2);
    z-index: 1500;
    margin: 0;
    list-style: none;
    border-radius: var(--ds-border-radius-md);
    box-shadow: var(--ds-shadow-md);
    background-color: var(--ds-color-neutral-background-default);
    border: 1px solid var(--ds-color-neutral-border-subtle);
  }

  .ds-dropdownmenu--sm {
    min-width: 240px;
    padding: var(--ds-spacing-2);
  }

  .ds-dropdownmenu--md {
    min-width: 260px;
    padding: var(--ds-spacing-3) var(--ds-spacing-2);
  }

  .ds-dropdownmenu--lg {
    min-width: 280px;
    padding: var(--ds-spacing-4) var(--ds-spacing-2);
  }
</style>
