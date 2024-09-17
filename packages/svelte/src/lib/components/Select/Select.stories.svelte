<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Select',
    component: Select,
  });
</script>

<script>
  setTemplate(template);
  $: options = [
    { label: 'Norge', value: '1' },
    { label: 'Sverige', value: '2' },
    { label: 'Danmark', value: '3' },
  ];

  $: optionsWithDescriptions = [
    {
      label: 'Sverige',
      value: '1',
      description: 'Bedre i fotball, snakker litt rart',
    },
    {
      label: 'Norge',
      value: '2',
      description: 'Dårlige i fotball, gode i olje',
    },
    {
      label: 'Danmark',
      value: '3',
      description: 'Bacon og de snakker som om de har en potet i munnen',
    },
  ];
  $: unSelected = null;

  let singlePreSelected = { label: 'Norge', value: '2' };

  $: multiUnselected = [];

  let multiPreselected = [
    { label: 'Norge', value: '1' },
    { label: 'Outer Planets Alliance', value: '3' },
  ];
</script>

{#snippet template(args)}
  <Select {options} bind:selected={unSelected} label="Velg et land" {...args} />
{/snippet}

<Story name="Default" />

<Story name="With description and without automatic menu close">
  <Select
    options={optionsWithDescriptions}
    bind:selected={singlePreSelected}
    closeMenuOnSelect={false}
    label="Velg et land"
  />
</Story>

<Story
  name="Has filter and hides selected option"
  args={{
    hideSelected: true,
    hasFilter: true,
    label: 'Write something to filter after',
  }}
/>

<Story name="Clearable and with error">
  <Select
    {options}
    bind:selected={singlePreSelected}
    label="Velg et land"
    clearable={true}
    error={singlePreSelected ? 'Vennligst tøm feltet' : ''}
  />
</Story>

<Story name="MultiSelect with pre-selected values">
  <Select
    {options}
    bind:selected={multiPreselected}
    label="Velg et land"
    multiple
  />
</Story>

<Story name="ReadOnly MultiSelect">
  <Select
    {options}
    bind:selected={multiPreselected}
    label="Velg et land"
    multiple
    readOnly
  />
</Story>
