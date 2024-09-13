<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import ErrorMessage from './ErrorMessage.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Typografi/ErrorMessage',
    component: ErrorMessage,
  });
</script>

<Template let:args>
  <ErrorMessage {...args}>
    Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
  </ErrorMessage>
</Template>

<Story name="Default" />

<Story name="Without error" args={{ error: false }} />
