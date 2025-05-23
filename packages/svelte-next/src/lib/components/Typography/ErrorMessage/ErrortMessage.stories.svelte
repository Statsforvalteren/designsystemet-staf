<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ErrorMessage from './ErrorMessage.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Typografi/ErrorMessage',
    component: ErrorMessage,
    render: template,
  });
</script>

{#snippet template(args)}
  <ErrorMessage {...args}>
    Lorem Ipsum er en dummytekst fra og for trykkeindustrien.
  </ErrorMessage>
{/snippet}

<Story name="Default" />

<Story name="Without error" args={{ error: false }} />
