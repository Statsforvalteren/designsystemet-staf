<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Textarea',
    component: Textarea,
  });
</script>

<script>
  setTemplate(template);
  let textareaValue = '';
</script>

{#snippet template(args)}
  <div style="width: 30vw">
    <Textarea
      bind:value={textareaValue}
      label="Overskrift"
      size="lg"
      description="Beskrivelse"
      hideLabel={false}
      characterLimit={100}
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
  name="ReadOnly with error text"
  args={{
    readOnly: true,
    label: 'Denne kan ikke redigeres.',
    description: '',
    error: 'Dette er en feilmelding.',
  }}
/>

<Story
  name="With hidden label and small size"
  args={{
    label: 'Denne kan ikke sees',
    description: 'Denne kan heller ikke sees',
    size: 'sm',
    hideLabel: true,
  }}
/>
