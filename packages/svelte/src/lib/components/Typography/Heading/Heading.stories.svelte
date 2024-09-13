<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Heading from './Heading.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Typografi/Heading',
    component: Heading,
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <div style="width: 100%">
    <Heading {...args}>
      Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
    </Heading>
  </div>
{/snippet}

<Story name="Default" />

<Story
  name="Level 5 with spacing and 2xl size"
  args={{ level: 5, size: '2xl', spacing: true }}
/>
