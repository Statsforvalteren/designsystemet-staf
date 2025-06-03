<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Spinner from './Spinner.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Spinner',
    component: Spinner,
    render: template,
  });
</script>

{#snippet template(args)}
  <Spinner {...args} />
{/snippet}

<Story name="Default" />

<Story name="With different colors and sizes">
  <div style="display: flex; gap: 1rem; align-items: center">
    <Spinner color="neutral" size="2xs" />
    <Spinner color="neutral" size="xs" />
    <Spinner color="neutral" size="sm" />
    <Spinner color="accent" size="md" />
    <Spinner color="accent" size="lg" />
    <Spinner color="accent" size="xl" />
  </div>
</Story>
