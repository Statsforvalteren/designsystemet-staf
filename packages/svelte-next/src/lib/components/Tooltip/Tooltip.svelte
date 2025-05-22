<script>
  import { run } from 'svelte/legacy';
  import { writable } from 'svelte/store';
  import { offset, flip, shift } from 'svelte-floating-ui/dom';
  import { arrow, createFloatingActions } from 'svelte-floating-ui';

  const ARROW_HEIGHT = 7;

  /** @type {{Record<string, any>}} */
  let {
    placement = 'top',
    delay = 150,
    open = undefined,
    defaultOpen = false,
    arrowGap = 4,
    showArrow = true,
    anchor,
    content,
    ...rest
  } = $props();

  let internalOpen = $state(false);
  run(() => {
    internalOpen = open ?? defaultOpen;
  });

  const arrowRef = writable(null);
  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: 'absolute',
    placement: placement,
    middleware: [
      offset(ARROW_HEIGHT + arrowGap),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
      arrow({ element: arrowRef }),
    ],
    onComputed({ placement, middlewareData }) {
      const { x, y } = middlewareData.arrow;
      let staticSide, dynamicSide;

      // Split placement into base and variation
      const [basePlacement] = placement.split('-');

      // Define static and dynamic sides based on base placement
      switch (basePlacement) {
        case 'top':
          staticSide = 'bottom';
          dynamicSide = 'left';
          break;
        case 'bottom':
          staticSide = 'top';
          dynamicSide = 'left';
          break;
        case 'left':
          staticSide = 'right';
          dynamicSide = 'bottom';
          break;
        case 'right':
          staticSide = 'left';
          dynamicSide = 'bottom';
          break;
        default:
          staticSide = 'bottom';
          dynamicSide = '50%';
      }

      if ($arrowRef) {
        Object.assign($arrowRef.style, {
          left: x !== null ? `${x - 0}px` : '',
          top: y !== null ? `${y - 0}px` : '',
          [staticSide]: '-4px',
          [dynamicSide]: 'calc(50% - 4px)',
        });
      }
    },
  });
</script>

<div
  role="tooltip"
  class="tooltip-wrapper"
  onmouseenter={async () => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    internalOpen = true;
  }}
  onmouseleave={async () => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    internalOpen = false;
  }}
  use:floatingRef
>
  {@render anchor?.()}
</div>

{#if open || (open === undefined && internalOpen)}
  <div class="ds-tooltip ds-paragraph--xs" use:floatingContent {...rest}>
    {@render content?.()}
    {#if showArrow}
      <div
        class="ds-tooltip__arrow"
        style="height: {ARROW_HEIGHT}px"
        bind:this={$arrowRef}
      ></div>
    {/if}
  </div>
{/if}

<style>
  .tooltip-wrapper {
    width: max-content;
    display: inline-block;
  }
  .ds-tooltip {
    --dsc-tooltip-background: var(--ds-color-neutral-text-default);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-wrap: break-word;
    background: var(--dsc-tooltip-background);
    padding: var(--ds-spacing-1) var(--ds-spacing-2);
    color: var(--ds-color-neutral-background-default);
    border-radius: var(--ds-border-radius-md);
    font-family: inherit;
  }
  .ds-tooltip__arrow {
    position: absolute;
    background-color: var(--dsc-tooltip-background);
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }
</style>
