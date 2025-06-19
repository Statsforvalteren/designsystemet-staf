<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from './Radio.svelte';
  import RadioGroup from './RadioGroup.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Radio',
    component: Radio,
    // @ts-expect-error Type error because subcomponents need to be isomorphic to main component.
    subcomponents: { RadioGroup },
    render: template,
  });
</script>

<script>
  let selectedValue = $state();
  let selectedValue = $state();
</script>

{#snippet template(args)}
  <Radio
    value="option"
    label="Lorem ipsum label."
    description="Lorem ipsum description."
    {...args}
  />
{/snippet}

<Story name="Default" />

<Story name="ReadOnly" args={{ readOnly: true }} />

<Story name="RadioGroup with defaultValue and disabled option">
  <RadioGroup
    bind:value={selectedValue}
    legend="RadioGroup legend"
    description="RadioGroup description"
    size="lg"
    defaultValue={'option2'}
  >
    <Radio value="option1" label="Lorem ipsum label." />
    <Radio
      value="option2"
      label="Lorem ipsum dolor sit label."
      description="Lorem ipsum dolor sit description."
    />
    <Radio
      value="option3"
      label="Lorem ipsum dolor sit amet label."
      description="Lorem ipsum dolor sit amet description."
      disabled
    />
  </RadioGroup>
</Story>

<Story name="RadioGroup with error">
  <RadioGroup
    bind:value={selectedValue}
    legend="RadioGroup legend"
    description="RadioGroup description"
    error="Please select a different option."
    defaultValue={'option3'}
  >
    <Radio value="option1" label="Lorem ipsum label." />
    <Radio
      value="option2"
      label="Lorem ipsum dolor sit label."
      description="Lorem ipsum dolor sit description."
    />
    <Radio
      value="option3"
      label="Lorem ipsum dolor sit amet label."
      description="Lorem ipsum dolor sit amet description."
    />
  </RadioGroup>
</Story>

<Story name="ReadOnly inline RadioGroup">
  <RadioGroup
    bind:value={selectedValue}
    inline={true}
    readOnly={true}
    legend="RadioGroup legend"
    description="RadioGroup description"
    size="sm"
  >
    <Radio value="option1" label="Lorem ipsum label." />
    <Radio
      value="option2"
      label="Lorem ipsum dolor sit label."
      description="Lorem ipsum dolor sit description."
    />
    <Radio
      value="option3"
      label="Lorem ipsum dolor sit amet label."
      description="Lorem ipsum dolor sit amet description."
    />
  </RadioGroup>
</Story>
