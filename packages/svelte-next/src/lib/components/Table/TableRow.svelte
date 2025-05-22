<script>
  import { getContext } from 'svelte';

  

  

  

  
  /** @type {{Record<string, any>}} */
  let {
    clickable = false,
    onClick = () => {},
    isHeaderRow = false,
    isOpen = $bindable(false),
    onclick,
    children,
    accordionContent,
    ...rest
  } = $props();

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

  let computedClasses = $derived(`
    ${clickable ? 'clickable' : ''}
    ${isAccordionRow ? 'accordion-header-row' : isHeaderRow ? 'empty-before-content' : ''}
    ${isOpen && !isHeaderRow ? 'isOpen' : ''}
  `);
</script>

{#if isAccordionRow}
  <tr class="spacing-row"></tr>
{/if}

<tr {...rest}  onclick={(event) => {
  onclick?.(event);

  handleClick?.(event);
}} class={computedClasses}>
  {@render children?.()}
</tr>

{#if isAccordionRow && isOpen}
  <tr class="accordion-content-row">
    <td colspan={accordionTableInfo.accordionColSpan + 1}>
      {@render accordionContent?.()}
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
