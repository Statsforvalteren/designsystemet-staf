<script>
  import { onMount } from 'svelte';

  /**
   * Event handler for the click event.
   * @type {() => void}
   */
  export let onClick = () => {};

  /**
   * The data which is being displayed in the table.
   * @type {Record<string, any>[]}
   */
  export let tableData = [];

  /**
   * The sorted data.
   * @type {Record<string, any>[]}
   */
  export let sortedData = [];

  /**
   * The name of the field to sort by in the column.
   * @type {string | undefined}
   */
  export let sortFieldName = undefined;

  /**
   * The current sort field to sort the table by.
   * @type {string | undefined}
   */
  export let currentSortField = undefined;

  $: sortDirection = undefined;
  $: sort = sortFieldName
    ? currentSortField === sortFieldName
      ? sortDirection
      : 'none'
    : undefined;

  function handleSort() {
    if (currentSortField === sortFieldName && sortDirection === 'descending') {
      currentSortField = undefined;
      sortDirection = undefined;
    } else {
      currentSortField = sortFieldName;
      sortDirection =
        currentSortField === sortFieldName && sortDirection === 'ascending'
          ? 'descending'
          : 'ascending';
    }

    updateSortedData();
  }

  function updateSortedData() {
    sortedData = [...tableData].sort((a, b) => {
      if (currentSortField === undefined) return 0;

      const valueA = a[currentSortField];
      const valueB = b[currentSortField];

      // Handle null/undefined values
      if (valueA == null && valueB == null) return 0; // Both null or undefined
      if (valueA == null) return sortDirection === 'ascending' ? 1 : -1; // Null/undefined goes last/first
      if (valueB == null) return sortDirection === 'ascending' ? -1 : 1; // Null/undefined goes last/first

      // Regular sorting logic
      if (valueA < valueB) return sortDirection === 'ascending' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'ascending' ? 1 : -1;

      return 0;
    });
  }

  onMount(() => {
    updateSortedData();
  });
</script>

<th {...sort ? { 'aria-sort': sort } : {}} {...$$restProps}>
  {#if sort}
    <button
      type="button"
      class="ds-focus"
      on:click={() => {
        handleSort();
        onClick();
      }}
    >
      <slot />
    </button>
  {:else}
    <slot />
  {/if}
</th>
