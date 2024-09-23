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
   * The name of the field to sort the data by.
   * @type {string | undefined}
   */
  export let sortFieldName = undefined;

  let sortField = null;

  $: sortDirection = undefined;
  $: sort = sortFieldName
    ? sortField === sortFieldName
      ? sortDirection
      : 'none'
    : undefined;

  function handleSort() {
    if (sortField === sortFieldName && sortDirection === 'descending') {
      sortField = null;
      sortDirection = undefined;
    } else {
      sortField = sortFieldName;
      sortDirection =
        sortField === sortFieldName && sortDirection === 'ascending'
          ? 'descending'
          : 'ascending';
    }

    updateSortedData();
  }

  function updateSortedData() {
    sortedData = [...tableData].sort((a, b) => {
      if (sortField === null) return 0;
      if (a[sortField] < b[sortField])
        return sortDirection === 'ascending' ? -1 : 1;
      if (a[sortField] > b[sortField])
        return sortDirection === 'ascending' ? 1 : -1;
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
