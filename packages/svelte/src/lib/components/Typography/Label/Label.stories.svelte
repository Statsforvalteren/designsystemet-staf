<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import Label from './Label.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Typografi/Label',
    component: Label,
  });
</script>

<Template let:args>
  <Label {...args}>
    Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
  </Label>
</Template>

<Story name="Default" />

<Story
  name="With weight, spacing and medium size"
  args={{ weight: 'semibold', size: 'md', spacing: false }}
/>
