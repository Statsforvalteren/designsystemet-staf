<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import Tabs from './Tabs.svelte';
  import TabList from './TabList.svelte';
  import TabItem from './TabItem.svelte';
  import TabContent from './TabContent.svelte';
  import House from './House.svelte';
  import Cog from './Cog.svelte';
  import SignLanguage from './SignLanguage.svelte';
  import Button from '../Button/Button.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Tabs',
    component: Tabs,
    subcomponents: { TabList, TabItem, TabContent },
  });
</script>

<script>
  $: tabsSwitchingCounter = 0;
  $: selectedTabId = 1;
</script>

<Template let:args>
  <Tabs {...args}>
    <TabList>
      <TabItem value="1" icon={House}>Tab 1</TabItem>
      <TabItem value="2" icon={Cog}>Tab 2</TabItem>
      <TabItem value="3" icon={SignLanguage}>Tab 3</TabItem>
    </TabList>
    <TabContent value="1">
      <h1>Innhold til Tab1</h1>
      <p>Her kan alt mulig plasseres.</p>
    </TabContent>
    <TabContent value="2">
      <Button>Andre komponenter kan også brukes</Button>
    </TabContent>
    <TabContent value="3">Tab 3 innhold</TabContent>
  </Tabs>
</Template>

<Story name="Default" />

<Story
  name="With default tab and lagre size"
  args={{ defaultValue: '2', size: 'lg' }}
/>

<Story name="With onChange event">
  <Tabs
    onChange={(e) => {
      tabsSwitchingCounter++;
      selectedTabId = e;
    }}
  >
    <TabList>
      <TabItem value="1">Tab 1</TabItem>
      <TabItem value="2">Tab 2</TabItem>
    </TabList>
    <TabContent value="1">Tab 1 innhold</TabContent>
    <TabContent value="2">Tab 2 innhold</TabContent>
  </Tabs>
  <p>Selected tab id: {selectedTabId}</p>
  <p>Tab switching counter: {tabsSwitchingCounter}</p>
</Story>
