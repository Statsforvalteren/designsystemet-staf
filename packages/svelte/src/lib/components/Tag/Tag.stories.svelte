<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import Tag from './Tag.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Tag',
    component: Tag,
  });
</script>

<Template let:args>
  <Tag {...args}>Text content</Tag>
</Template>

<Story name="Default" />

<Story name="With border" args={{ hasBorder: true, color: 'brand1' }} />

<Story name="Colors and sizes">
  <div style="display: flex; gap: 0.5rem; align-items: center">
    <Tag color="brand1" size="sm">Brand1</Tag>
    <Tag color="brand2" size="sm">Brand2</Tag>
    <Tag color="brand3">Brand3</Tag>
    <Tag color="success" hasBorder>Success</Tag>
    <Tag color="warning" hasBorder size="lg">Warning</Tag>
    <Tag color="danger" hasBorder size="lg">Danger</Tag>
  </div>
</Story>
