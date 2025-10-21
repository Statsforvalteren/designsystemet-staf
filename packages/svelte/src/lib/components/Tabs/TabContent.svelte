<!-- TabContent.svelte -->
<script>
  import { getContext } from 'svelte';
  import { ParagraphWrapper } from '../../index.js';

  /**
   * Value of the tab content.
   */
  export let value;

  const { selectedTab, tabSize } = getContext('tabsStore');

  let standardizedSize;

  switch ($tabSize) {
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
</script>

{#if $selectedTab === value}
  <ParagraphWrapper size={$tabSize}>
    <div
      class={`ds-tabs__content .ds-tabs--${standardizedSize}`}
      {...$$restProps}
    >
      <slot />
    </div>
  </ParagraphWrapper>
{/if}

<style lang="scss">
  .ds-tabs__content {
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
