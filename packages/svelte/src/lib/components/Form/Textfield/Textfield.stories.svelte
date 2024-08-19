<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Textfield from './Textfield.svelte';

  export const meta = {
    title: 'Komponenter/Textfield',
    component: Textfield,
  };
</script>

<script>
  let textareaValue = '';
</script>

<Template let:args>
  <div style="width: 30vw">
    <Textfield
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
</Template>

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

<Story
  name="With prefix, suffix and no character limit"
  args={{
    label: 'Legg inn adressen',
    description: '',
    prefix: 'https://',
    suffix: '.com',
    characterLimit: null,
    characterLimitLabel: null,
  }}
/>
