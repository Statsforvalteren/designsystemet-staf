<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';

  export const meta = {
    title: 'Komponenter/Textarea',
    component: Textarea,
  };
</script>

<script>
  let textareaValue = '';
</script>

<Template let:args>
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
