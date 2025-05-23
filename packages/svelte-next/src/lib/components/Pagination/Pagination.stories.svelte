<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from '../Table/Table.svelte';
  import TableHeaderCell from '../Table/TableHeaderCell.svelte';
  import TableCell from '../Table/TableCell.svelte';
  import TableRow from '../Table/TableRow.svelte';
  import Pagination from './Pagination.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Pagination',
    component: Pagination,
    render: template,
  });
</script>

<script>
  import { run } from 'svelte/legacy';

  let pageData = $derived(
    new Map([
      [
        1,
        [
          { postnummer: 4804, postSted: 'Arendal' },
          { postnummer: 4804, postSted: 'Arendal' },
          { postnummer: 4804, postSted: 'Arendal' },
        ],
      ],
      [
        2,
        [
          { postnummer: 3732, postSted: 'Skien' },
          { postnummer: 3732, postSted: 'Skien' },
          { postnummer: 3732, postSted: 'Skien' },
        ],
      ],
      [
        3,
        [
          { postnummer: 3920, postSted: 'Porsgrunn' },
          { postnummer: 3920, postSted: 'Porsgrunn' },
          { postnummer: 3920, postSted: 'Porsgrunn' },
        ],
      ],
      [
        4,
        [
          { postnummer: 1284, postSted: 'Oslo' },
          { postnummer: 1284, postSted: 'Oslo' },
          { postnummer: 1284, postSted: 'Oslo' },
        ],
      ],
    ]),
  );
  let pageId;
  run(() => {
    pageId = 1;
  });
</script>

{#snippet template(args)}
  <Table style="padding-bottom: 10px">
    <TableRow slot="headerRow">
      <TableHeaderCell>Postnummer</TableHeaderCell>
      <TableHeaderCell>Post Sted</TableHeaderCell>
    </TableRow>
    {#each pageData.get(pageId) as row}
      <TableRow>
        <TableCell>{row.postnummer}</TableCell>
        <TableCell>{row.postSted}</TableCell>
      </TableRow>
    {/each}
  </Table>
  <Pagination bind:currentPage={pageId} totalPages={4} {...args} />
{/snippet}

<Story name="Default" />

<Story
  name="Alot of pages and hidden labels"
  args={{ totalPages: 20, hideLabels: true }}
/>

<Story
  name="Custom labels"
  args={{ previousLabel: 'I går', nextLabel: 'I morgen' }}
/>

<Story
  name="Compact page-view and large size"
  args={{ totalPages: 10, compact: true, size: 'lg' }}
/>
