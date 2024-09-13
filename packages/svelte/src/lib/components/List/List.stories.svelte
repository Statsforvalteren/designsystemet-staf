<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import ListItem from './ListItem.svelte';
  import List from './List.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/List',
    component: List,
    subcomponents: { ListItem },
  });
</script>

<Template let:args>
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
</Template>

<Story name="Default" />

<Story name="Ordered list and small size" args={{ as: 'ol', size: 'sm' }} />

<Story
  name="No bulletpoints and large size"
  args={{ as: 'none', size: 'lg' }}
/>
