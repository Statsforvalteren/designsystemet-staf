<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import ErrorMessage from './ErrorMessage.svelte';

  export const meta = {
    title: 'Komponenter/Typografi/ErrorMessage',
    component: ErrorMessage,
  };
</script>

<Template let:args>
  <ErrorMessage {...args}>
    Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
  </ErrorMessage>
</Template>

<Story name="Default" />

<Story name="Without error" args={{ error: false }} />
