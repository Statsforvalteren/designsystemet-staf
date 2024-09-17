<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Link from './Link.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Link',
    component: Link,
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <Link {...args} href="https://bak.statsforvalteren.no/"
    >Statsforvalterens fellestenester</Link
  >
{/snippet}

<Story name="Default" />

<Story name="As button" args={{ as: 'button' }} />
