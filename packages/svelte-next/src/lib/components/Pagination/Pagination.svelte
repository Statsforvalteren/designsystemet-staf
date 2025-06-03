<script>
  import PaginationItem from './PaginationItem.svelte';
  import Paragraph from '../Typography/Paragraph/Paragraph.svelte';
  import PaginationButton from './PaginationButton.svelte';

  

  

  

  

  

  

  

  

  
  /** @type {{Record<string, any>}} */
  let {
    ariaLabel = 'Pagination',
    previousLabel = 'Forrige side',
    nextLabel = 'Neste side',
    currentPage = $bindable(1),
    hideLabels = false,
    totalPages,
    size = 'md',
    compact = false,
    onChange = () => {},
    ...rest
  } = $props();

  function getSteps({ compact, currentPage, totalPages }) {
    /**  Number of always visible pages at the start and end. */
    const boundaryCount = 1;

    /** Number of always visible pages before and after the current page. */
    const siblingCount = compact ? 0 : 1;

    const range = (start, end) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (totalPages <= (boundaryCount + siblingCount) * 2 + 3)
      return range(1, totalPages);

    const startPages = range(1, boundaryCount);
    const endPages = range(totalPages - boundaryCount + 1, totalPages);

    const siblingsStart = Math.max(
      Math.min(
        currentPage - siblingCount,
        totalPages - boundaryCount - siblingCount * 2 - 1,
      ),
      boundaryCount + 2,
    );
    const siblingsEnd = siblingsStart + siblingCount * 2;

    return [
      ...startPages,
      siblingsStart -
        (startPages[startPages.length - 1]
          ? startPages[startPages.length - 1]
          : 0) ===
      2
        ? siblingsStart - 1
        : 'ellipsis',
      ...range(siblingsStart, siblingsEnd),
      (endPages[0] ? endPages[0] : totalPages + 1) - siblingsEnd === 2
        ? siblingsEnd + 1
        : 'ellipsis',
      ...endPages,
    ];
  }

  let showNextPage = $derived(currentPage < totalPages);
  let showPreviousPage = $derived(currentPage !== 1);

  function nextPage() {
    currentPage = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;
    onChange();
  }

  function previousPage() {
    currentPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
    onChange();
  }

  function setSpecificPage(page) {
    currentPage = page;
    onChange();
  }
</script>

<nav aria-label={ariaLabel} {...rest}>
  <ul class="ds-pagination" data-size={size}>
    <PaginationItem {size} {compact}>
      <PaginationButton
        ariaLabel={previousLabel}
        {size}
        disabled={!showPreviousPage}
        onClick={() => previousPage()}
      >
        {#if !hideLabels}
          {previousLabel}
        {/if}
      </PaginationButton>
    </PaginationItem>
    {#each getSteps({ compact, currentPage, totalPages }) as page, i}
      <PaginationItem key={`${page}${i}`} {size} {compact}>
        {#if page === 'ellipsis'}
          <Paragraph class="ds-pagination__ellipsis" {size}>...</Paragraph>
        {:else}
          <PaginationButton
            {size}
            ariaLabel={`Side ${page}`}
            isActive={currentPage === page}
            onClick={() => setSpecificPage(page)}
          >
            {page}
          </PaginationButton>
        {/if}
      </PaginationItem>
    {/each}
    <PaginationItem {size} {compact}>
      <PaginationButton
        ariaLabel={nextLabel}
        {size}
        disabled={!showNextPage}
        onClick={() => nextPage()}
      >
        {#if !hideLabels}
          {nextLabel}
        {/if}
      </PaginationButton>
    </PaginationItem>
  </ul>
</nav>

<style>
  .ds-pagination {
    --dsc-pagination-gap: var(--ds-spacing-4);
    --dsc-pagination-ellipsis-width: var(--ds-sizing-12);
    --dsc-pagination-chevron-size: var(--ds-sizing-6);

    display: flex;
    flex-wrap: wrap;
    gap: var(--dsc-pagination-gap);
    list-style: none;
    margin: 0;
    padding: 0;

    &[data-size='sm'] {
      --dsc-pagination-gap: var(--ds-spacing-2);
      --dsc-pagination-ellipsis-width: var(--ds-sizing-10);
    }

    &[data-size='lg'] {
      --dsc-pagination-gap: var(--ds-spacing-6);
      --dsc-pagination-ellipsis-width: var(--ds-sizing-14);
    }

    &[data-compact] {
      --dsc-pagination-gap: var(--ds-spacing-0);
    }
  }
  :global(.ds-pagination > li:not(:has(a, button))) {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: var(--dsc-pagination-ellipsis-width);
  }
  :global(
      .ds-pagination > li:first-child > ::before,
      .ds-pagination > li:last-child > ::after
    ) {
    background: currentcolor;
    content: '';
    height: var(--dsc-pagination-chevron-size);
    mask: center/contain no-repeat
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath d='M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06'/%3E%3C/svg%3E");
    width: var(--dsc-pagination-chevron-size);
  }
  :global(.ds-pagination > li:first-child > ::before) {
    rotate: 180deg;
  }
</style>
