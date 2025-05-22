<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Checkbox from './Checkbox.svelte';
  import CheckboxGroup from './CheckboxGroup.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Checkbox',
    component: Checkbox,
    // @ts-ignore Type error because subcomponents need to be isomorphic to main component.
    subcomponents: { CheckboxGroup },
  });
</script>

<script>
  setTemplate(template);
  let selectedCheckValue = $state(false);
  let selectedValues = $state();
</script>

{#snippet template(args)}
  <Checkbox
    {...args}
    value="standalone"
    bind:checked={selectedCheckValue}
    label="Lorem ipsum label"
    description="Lorem ipsum description"
  />
{/snippet}

<Story name="Default" />

<Story name="ReadOnly" args={{ readOnly: true }} />

<Story name="CheckboxGroup with disabled and checked options">
  <CheckboxGroup
    bind:value={selectedValues}
    legend="CheckboxGroup legend"
    description="CheckboxGroup description"
    size="md"
  >
    <Checkbox value="option1" label="Lorem ipsum label" />
    <Checkbox
      value="option2"
      label="Lorem ipsum label"
      description="Lorem ipsum description"
    />
    <Checkbox
      value="option3"
      label="Lorem ipsum disabled label"
      description="Lorem ipsum disabled description"
      disabled
      checked
    />
    <Checkbox
      value="option4"
      label="Lorem ipsum disabled label"
      description="Lorem ipsum disabled description"
      disabled
      checked
    />
  </CheckboxGroup>
</Story>

<Story name="CheckboxGroup with error">
  <CheckboxGroup
    bind:value={selectedValues}
    legend="CheckboxGroup legend"
    description="CheckboxGroup description"
    error="Please select a different option."
    defaultValue={['option3']}
  >
    <Checkbox value="option1" label="Lorem ipsum label" />
    <Checkbox
      value="option2"
      label="Lorem ipsum label"
      description="Lorem ipsum description"
    />
    <Checkbox
      value="option3"
      label="Lorem ipsum disabled label"
      description="Lorem ipsum disabled description"
    />
  </CheckboxGroup>
</Story>

<Story name="Readonly CheckboxGroup with defaultValue">
  <CheckboxGroup
    bind:value={selectedValues}
    legend="CheckboxGroup legend"
    description="CheckboxGroup description"
    size="lg"
    defaultValue={['option2']}
    readOnly={true}
  >
    <Checkbox value="option1" label="Lorem ipsum label" />
    <Checkbox
      value="option2"
      label="Lorem ipsum pre-selected label"
      description="Lorem ipsum description"
    />
    <Checkbox
      value="option3"
      label="Lorem ipsum label"
      description="Lorem ipsum description"
    />
  </CheckboxGroup>
</Story>
