<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Spinner from './Spinner.svelte';

  export const meta = {
    title: 'Komponenter/Spinner',
    component: Spinner,
  };
</script>

<Template let:args>
  <Spinner {...args} />
</Template>

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
