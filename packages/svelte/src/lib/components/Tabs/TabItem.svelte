<!-- TabItem.svelte -->
<script>
  import { Paragraph } from "$lib";
  import { getContext } from "svelte";

  /**
   * Value of the tab.
   */
  export let value;

  /**
   * Icon to be displayed in the tab.
   */
  export let icon = null;

  const { selectedTab, select, tabSize } = getContext("tabsStore");
  let isSelected;
  let standardizedSize;

  switch ($tabSize) {
    case "small":
    case "sm":
      standardizedSize = "sm";
      break;
    case "medium":
    case "md":
      standardizedSize = "md";
      break;
    case "large":
    case "lg":
      standardizedSize = "lg";
      break;
    default:
      standardizedSize = "md";
      break;
  }

  // Abonner på selectedTab store
  $: isSelected = $selectedTab && $selectedTab === value;

  function handleClick() {
    select(value);
  }
</script>

<Paragraph asChild variant="short" size={$tabSize}>
  <div class={`${isSelected ? "selected" : ""}`}>
    <button
      class={`ds-tabs__tab ds-tabs--${standardizedSize} ds-focus ${
        !icon ? "no-icon" : ""
      }`}
      on:click={handleClick}
    >
      {#if icon}
        <div class="icon">{@html icon}</div>
      {/if}

      <slot />
    </button>
  </div>
</Paragraph>

<style lang="scss">
  .ds-tabs__tab {
    --dsc-tabs__tab-bottom-border-color: transparent;

    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: var(--ds-spacing-1);
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: var(--ds-spacing-2) var(--ds-spacing-3);
    border: none;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
    color: var(--ds-color-neutral-text-subtle);
    position: relative;
    font-family: inherit;
  }
  .ds-tabs--sm {
    font-size: 0.9375rem;
    padding: var(--ds-spacing-2) var(--ds-spacing-4);
  }
  .ds-tabs--md {
    font-size: 1.125rem;
    padding: var(--ds-spacing-3) var(--ds-spacing-5);
  }
  .ds-tabs--lg {
    font-size: 1.3125rem;
    padding: var(--ds-spacing-4) var(--ds-spacing-6);
  }
  @media (hover: hover) and (pointer: fine) {
    .ds-tabs__tab:hover:not([aria-selected="true"]) {
      --dsc-tabs__tab-bottom-border-color: var(
        --ds-color-neutral-border-subtle
      );

      color: var(--ds-color-neutral-text-default);
    }
  }

  .selected > .ds-tabs__tab {
    --dsc-tabs__tab-bottom-border-color: var(--ds-color-accent-base-default);

    color: var(--ds-color-accent-text-subtle);
  }

  .ds-tabs__tab:focus {
    z-index: 2;
  }

  .ds-tabs__tab::after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    border-radius: var(--ds-border-radius-full);
    background-color: var(--dsc-tabs__tab-bottom-border-color);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .ds-tabs__tablist {
    display: flex;
    flex-direction: row;
    border-bottom: var(--ds-border-width-default) solid
      var(--ds-color-neutral-border-subtle);
    position: relative;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.1rem 0.5rem 0.1875rem 0;
    scale: 1.4;
    color: var(--fds-semantic-text-neutral-subtle);
  }
  .no-icon {
    margin-bottom: -0.125rem;
  }
</style>
