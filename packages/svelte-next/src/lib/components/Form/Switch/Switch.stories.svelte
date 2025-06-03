<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Switch from './Switch.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Switch',
    component: Switch,
    render: template,
  });
</script>

<script>
  let isSwitchChecked = $state(false);
  let isSwitchChecked = $state(false);
</script>

{#snippet template(args)}
  <Switch id="switch" bind:checked={isSwitchChecked} {...args}>Switch</Switch>
{/snippet}

<Story name="Default" />

<Story name="Disabled with description">
  <Switch
    id="switch"
    bind:checked={isSwitchChecked}
    disabled
    description="En undertekst som forklarer hensikten med bryteren"
  >
    Kan ikke interagere med denne
  </Switch>
</Story>

<Story name="ReadOnly with large size and left label">
  <Switch
    id="switch"
    bind:checked={isSwitchChecked}
    readOnly
    size="lg"
    position="right"
  >
    Kan ikke interagere med denne
  </Switch>
</Story>
