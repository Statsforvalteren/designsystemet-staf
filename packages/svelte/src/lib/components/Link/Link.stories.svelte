<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import Link from './Link.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Link',
    component: Link,
  });
</script>

<Template let:args>
  <Link {...args} href="https://bak.statsforvalteren.no/"
    >Statsforvalterens fellestenester</Link
  >
</Template>

<Story name="Default" />

<Story name="As button" args={{ as: 'button' }} />
