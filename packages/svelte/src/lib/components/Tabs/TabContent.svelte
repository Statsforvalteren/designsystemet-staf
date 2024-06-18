<!-- TabContent.svelte -->
<script>
  import { getContext } from "svelte";
  import { Paragraph } from "$lib";

  /**
   * Value of the tab content.
   */
  export let value;

  const { selectedTab, tabSize } = getContext("tabsStore");

  let normalizedSize;

  switch ($tabSize) {
    case "small":
    case "sm":
      normalizedSize = "sm";
      break;
    case "medium":
    case "md":
      normalizedSize = "md";
      break;
    case "large":
    case "lg":
      normalizedSize = "lg";
      break;
    default:
      normalizedSize = "md";
      break;
  }
</script>

{#if $selectedTab === value}
  <Paragraph as="div" variant="short" size={$tabSize}>
    <div
      class={`ds-tabs__content .ds-tabs--${normalizedSize}`}
      {...$$restProps}
    >
      <slot />
    </div>
  </Paragraph>
{/if}

<style lang="scss">
  .ds-tabs__content {
    padding: var(--ds-spacing-5);
    color: var(--ds-color-neutral-text-default);
  }
  .ds-tabs--sm,
  .ds-tabs__content {
    padding: var(--ds-spacing-4);
  }

  .ds-tabs--md,
  .ds-tabs__content {
    padding: var(--ds-spacing-5);
  }

  .ds-tabs--lg,
  .ds-tabs__content {
    padding: var(--ds-spacing-6);
  }
</style>
