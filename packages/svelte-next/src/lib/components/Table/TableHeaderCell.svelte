<script>
  import { run } from 'svelte/legacy';

  import { onMount } from 'svelte';

  

  

  

  

  
  /** @type {{Record<string, any>}} */
  let {
    onClick = () => {},
    tableData = [],
    sortedData = $bindable([]),
    sortFieldName = undefined,
    currentSortField = $bindable(undefined),
    children,
    ...rest
  } = $props();

  let sortDirection;
  run(() => {
    sortDirection = undefined;
  });
  let sort = $derived(sortFieldName
    ? currentSortField === sortFieldName
      ? sortDirection
      : 'none'
    : undefined);

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

<th {...sort ? { 'aria-sort': sort } : {}} {...rest}>
  {#if sort}
    <button
      type="button"
      class="ds-focus"
      onclick={() => {
        handleSort();
        onClick();
      }}
    >
      {@render children?.()}
    </button>
  {:else}
    {@render children?.()}
  {/if}
</th>
