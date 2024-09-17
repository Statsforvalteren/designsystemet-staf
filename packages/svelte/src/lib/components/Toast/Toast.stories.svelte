<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../Button/Button.svelte';
  import Toast from './Toast.svelte';
  import { toast } from './notifications';

  const { Story } = defineMeta({
    title: 'Komponenter/Toast',
    component: Toast,
  });
</script>

<Toast />
<Story name="Default">
  <div style="height: 100px; width: 700px;">
    <Button
      on:click={() => toast('Dette er en toast', 'success', 'top')}
      style="margin: 150px auto;"
    >
      Åpne toast
    </Button>
  </div>
</Story>

<Story name="Danger and bottom placement">
  <div style="height: 100px; width: 700px;">
    <Button
      on:click={() => toast('Dette er en toast', 'danger', 'bottom')}
      style="margin: 150px auto;"
    >
      Åpne toast
    </Button>
  </div>
</Story>

<Story name="Info and short duration">
  <div style="height: 100px; width: 700px;">
    <Button
      on:click={() => toast('Dette er en toast', 'info', 'top', 500)}
      style="margin: 150px auto;"
    >
      Åpne toast
    </Button>
  </div>
</Story>
