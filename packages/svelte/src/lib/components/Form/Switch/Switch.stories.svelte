<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Switch from './Switch.svelte';

  export const meta = {
    title: 'Komponenter/Switch',
    component: Switch,
  };
</script>

<script>
  let isSwitchChecked = false;
</script>

<Template let:args>
  <Switch id="switch" bind:checked={isSwitchChecked} {...args}>Switch</Switch>
</Template>

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
