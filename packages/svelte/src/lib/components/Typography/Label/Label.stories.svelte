<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Label from './Label.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Typografi/Label',
    component: Label,
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <Label {...args}>
    Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
  </Label>
{/snippet}

<Story name="Default" />

<Story
  name="With weight, spacing and medium size"
  args={{ weight: 'semibold', size: 'md', spacing: false }}
/>
