<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Table from './Table.svelte';
  import TableHeaderCell from './TableHeaderCell.svelte';
  import TableCell from './TableCell.svelte';
  import TableRow from './TableRow.svelte';
  import Button from "../Button/Button.svelte";
  import Checkbox from "../Form/Checkbox/Checkbox.svelte";

  const { Story } = defineMeta({
    title: 'Komponenter/Table',
    component: Table,
    subcomponents: { TableCell, TableHeaderCell, TableRow },
  });
</script>
  
<script>
  setTemplate(template);

  $: sortedData = [];
  const manyRows = Array.from({ length: 50 }, (_, i) => i + 1);
  const dummyData = [
    {
      id: 1,
      navn: 'Lise Nordmann',
      epost: 'lise@nordmann.no',
      telefon: '22345678',
    },
    {
      id: 2,
      navn: 'Kari Nordmann',
      epost: 'kari@nordmann.no',
      telefon: '87654321',
    },
    {
      id: 3,
      navn: 'Ola Nordmann',
      epost: 'ola@nordmann.no',
      telefon: '32345678',
    },
    {
      id: 4,
      navn: 'Per Nordmann',
      epost: 'per@nordmann.no',
      telefon: '12345678',
    },
    {
      id: 5,
      navn: 'Julie Nordmann',
      epost: 'julie@nordmann.no',
      telefon: '14646478',
    },
    {
      id: 6,
      navn: 'Roger Nordmann',
      epost: 'roger@nordmann.no',
      telefon: '66645678',
    },
  ];
</script>

{#snippet template(args)}
  <Table {...args}>
      <TableRow slot="headerRow">
          <TableHeaderCell tableData={dummyData} sortFieldName="navn" bind:sortedData>Navn</TableHeaderCell>
          <TableHeaderCell>Epost</TableHeaderCell>
          <TableHeaderCell tableData={dummyData} sortFieldName="telefon" bind:sortedData>Telefon</TableHeaderCell>
      </TableRow>
      {#each sortedData as row}
          <TableRow key={row.id}>
              <TableCell>{row.navn}</TableCell>
              <TableCell>{row.epost}</TableCell>
              <TableCell>{row.telefon}</TableCell>
          </TableRow>
      {/each}
  </Table>
{/snippet}

<Story name="Default" />

<Story name="Zebra with border" args={{ zebra: true, border: true }} />

<Story name="Sticky header and fixed layout">
  <div style="height: 280px; overflow: auto">
    <Table stickyHeader={true} style="table-layout: fixed">
        <TableRow slot="headerRow">
            <TableHeaderCell>Header 1</TableHeaderCell>
            <TableHeaderCell>Header 2</TableHeaderCell>
            <TableHeaderCell>Header 3</TableHeaderCell>
        </TableRow>
        {#each manyRows as row}
            <TableRow key={row}>
                <TableCell>{row % 2 == 0 ? `Cell ${row}.1` : "LONG TEXT TO STRECH CELL"}</TableCell>
                <TableCell>Cell {row}.2</TableCell>
                <TableCell>Cell {row}.3</TableCell>
            </TableRow>
        {/each}
    </Table>
  </div>
</Story>

<Story name="With custom cell content">
  <Table>
    <TableRow slot="headerRow">
        <TableHeaderCell>Header 1</TableHeaderCell>
        <TableHeaderCell>Header 2</TableHeaderCell>
        <TableHeaderCell>Header 3</TableHeaderCell>
    </TableRow>
    <TableRow>
        <TableCell><Button>Label</Button></TableCell>
        <TableCell><Checkbox  label="" value="" /></TableCell>
        <TableCell>Normal text</TableCell>
    </TableRow>
  </Table>
</Story>