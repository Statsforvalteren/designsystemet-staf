<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Search from './Search.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Search',
    component: Search,
  });
</script>

<script>
  setTemplate(template);
  let searchValue = '';
</script>

{#snippet template(args)}
  <div style="width: 600px;">
    <Search
      bind:value={searchValue}
      label="Søk etter noe"
      size="lg"
      characterLimit={30}
      placeholder="Søk"
      characterLimitLabel={(count) =>
        count > -1
          ? `Du har ${count} tegn igjen.`
          : `Du har ${Math.abs(count)} tegn for mye.`}
      {...args}
    />
  </div>
{/snippet}

<Story name="Default" />

<Story
  name="Secondary variant with error"
  args={{ variant: 'secondary', error: 'Dette søkefelt fungerer ikke riktig!' }}
/>

<Story name="Disabled and small size" args={{ disabled: true, size: 'sm' }} />

<Story
  name="Primary variant with hidden label"
  args={{ variant: 'primary', hideLabel: true }}
/>

<Story
  name="Search button label and clear button label"
  args={{
    variant: 'primary',
    searchButtonLabel: 'Click me!',
    clearButtonLabel: 'Clear',
    label: 'Søk etter noe for å se clear button',
  }}
/>
