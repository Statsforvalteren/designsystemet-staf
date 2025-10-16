<script>
  import { getContext } from 'svelte';

  /**
   * Enable or disable the row as clickable, if clickable the row will have a pointer cursor and a hover effect.
   * @type {boolean}
   */
  export let clickable = false;

  /**
   * Function to call when the row is clicked. Works only if clickable is set to true.
   * @type {() => void}
   */
  export let onClick = () => {};

  /**
   * If true, the row will be treated as a header row.
   * @type {boolean}
   */
  export let isHeaderRow = false;

  /**
   * Determines if the row is open or not. Only works if the row is an accordion row.
   */
  export let isOpen = false;

  /**
   * Determines if accordion row has spacing between rows. Default is 1rem spacing.
   */
  export let rowSpacing = true;

  const accordionTableInfo = getContext('accordionTableInfo');
  const isAccordionRow = accordionTableInfo.hasAccordionRows && !isHeaderRow;

  function handleClick() {
    if (clickable) {
      onClick();
    }
    if (accordionTableInfo.hasAccordionRows) {
      isOpen = !isOpen;
    }
  }

  $: computedClasses = `
    ${clickable ? 'clickable' : ''}
    ${isAccordionRow ? 'accordion-header-row' : isHeaderRow ? 'empty-before-content' : ''}
    ${isOpen && !isHeaderRow ? 'isOpen' : ''}
  `;
</script>

{#if isAccordionRow && rowSpacing}
  <tr class="spacing-row"></tr>
{/if}

<tr {...$$restProps} on:click on:click={handleClick} class={computedClasses}>
  <slot />
</tr>

{#if isAccordionRow && isOpen}
  <tr class="accordion-content-row">
    <td colspan={accordionTableInfo.accordionColSpan + 1}>
      <slot name="accordionContent" />
    </td>
  </tr>
{/if}

<style>
  .clickable {
    cursor: pointer;
  }
  :global(.clickable:hover > td),
  :global(.accordion-header-row:hover > td) {
    background-color: var(--ds-color-neutral-background-subtle);
  }
  .spacing-row {
    height: 1rem;
  }
  .accordion-header-row {
    cursor: pointer;
    padding: 20px;
    border: 1px solid var(--ds-color-neutral-border-subtle);
    background-color: var(--ds-color-neutral-background-default);
    position: relative;
    /* border-radius: 6px; */
    /* box-shadow: 0px 0px 6px var(--ds-color-neutral-border-subtle); */
  }
  :global(.accordion-header-row > *) {
    border-bottom: none !important;
    padding: 20px 20px 20px 40px !important;
  }
  .accordion-header-row::before {
    content: '\276E';
    display: flex;
    justify-content: center;
    transform: rotate(-90deg);
    margin: 0;
    position: absolute;
    top: calc(50% - 12px);
    left: 15px;
  }
  .accordion-header-row:hover {
    background-color: var(--ds-color-neutral-background-subtle);
  }
  .isOpen.accordion-header-row::before {
    transform: rotate(90deg);
  }
  .empty-before-content::before {
    content: '';
  }
  .accordion-content-row {
    border: 1px solid var(--ds-color-neutral-border-subtle);
  }

  :global(.accordion-content-row > td) {
    border-bottom: none !important;
    padding: 20px !important;
  }
</style>
