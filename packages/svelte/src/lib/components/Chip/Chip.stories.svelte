<script module>
  import Chip from './Chip.svelte';
  import ChipGroup from './ChipGroup.svelte';
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Komponenter/Chip',
    component: Chip,
    subcomponents: { ChipGroup },
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <Chip {...args}>Potetgullflak</Chip>
{/snippet}

<Story name="Default" />

<Story name="ChipGroup with checked options">
  <ChipGroup size="sm">
    <Chip>Bokmål</Chip>
    <Chip checkmark selected>Engelsk</Chip>
    <Chip checkmark selected>Nynorsk</Chip>
    <Chip>Fransk</Chip>
    <Chip>Tysk</Chip>
  </ChipGroup>
</Story>

<Story name="Disabled ChipGroup">
  <ChipGroup size="lg" disabled={true}>
    <Chip>Agurk</Chip>
    <Chip>Tomat</Chip>
    <Chip>Salat</Chip>
  </ChipGroup>
</Story>
