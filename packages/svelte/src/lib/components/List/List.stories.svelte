<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import ListItem from './ListItem.svelte';
  import List from './List.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/List',
    component: List,
    subcomponents: { ListItem },
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
{/snippet}

<Story name="Default" />

<Story name="Ordered list and small size" args={{ as: 'ol', size: 'sm' }} />

<Story
  name="No bulletpoints and large size"
  args={{ as: 'none', size: 'lg' }}
/>
