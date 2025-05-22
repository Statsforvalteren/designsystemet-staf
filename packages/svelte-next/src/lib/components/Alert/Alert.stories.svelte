<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Alert from './Alert.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Alert',
    component: Alert,
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <Alert {...args}>Informasjonstekst som brukeren bør vite om.</Alert>
{/snippet}

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
