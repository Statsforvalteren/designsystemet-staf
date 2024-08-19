<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Heading from './Heading.svelte';

  export const meta = {
    title: 'Komponenter/Typografi/Heading',
    component: Heading,
  };
</script>

<Template let:args>
  <div style="width: 100%">
    <Heading {...args}>
      Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
    </Heading>
  </div>
</Template>

<Story name="Default" />

<Story
  name="Level 5 with spacing and 2xl size"
  args={{ level: 5, size: '2xl', spacing: true }}
/>
