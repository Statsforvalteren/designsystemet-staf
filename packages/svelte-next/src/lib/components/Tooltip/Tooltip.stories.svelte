<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tooltip from './Tooltip.svelte';
  import Button from '../Button/Button.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Tooltip',
    component: Tooltip,
    render: template,
  });
</script>

{#snippet template(args)}
  <div style="height: 150px; margin-top: 20px">
    <Tooltip content="Tooltip text" {...args} style="white-space: nowrap">
      <Button slot="anchor">Hover over me</Button>
      <span slot="content">Tooltip where extra information can go.</span>
    </Tooltip>
  </div>
{/snippet}

<Story name="Default" />

<Story
  name="Without arrow and open by default"
  args={{ showArrow: false, open: true }}
/>

<Story
  name="With opening delay, right placement and wide arrow gap"
  args={{ delay: 1000, arrowGap: 30, placement: 'right' }}
/>
