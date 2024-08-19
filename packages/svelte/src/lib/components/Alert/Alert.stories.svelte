<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Alert from './Alert.svelte';

  export const meta = {
    title: 'Komponenter/Alert',
    component: Alert,
  };
</script>

<Template let:args>
  <Alert {...args}>Informasjonstekst som brukeren bør vite om.</Alert>
</Template>

<Story name="Default" />

<Story name="With warning severity and elevation">
  <Alert severity="warning" elevated>Husk å tømme søppelbøtten!</Alert>
</Story>

<Story name="With success severity and large size">
  <Alert severity="success" size="lg">Endringer har blitt lagret.</Alert>
</Story>

<Story name="With danger severity and small size">
  <Alert severity="danger" size="sm">Noe gikk galt. Prøv igjen senere.</Alert>
</Story>
