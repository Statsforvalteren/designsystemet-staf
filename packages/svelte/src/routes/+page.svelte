<script>
  // @ts-nocheck
  import Alert from '$lib/components/Alert/Alert.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Switch from '$lib/components/Form/Switch/Switch.svelte';
  import Radio from '$lib/components/Form/Radio/Radio.svelte';
  import RadioGroup from '$lib/components/Form/Radio/RadioGroup.svelte';
  import Textfield from '$lib/components/Form/Textfield/Textfield.svelte';
  import Checkbox from '$lib/components/Form/Checkbox/Checkbox.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import List from '$lib/components/List/List.svelte';
  import ListItem from '$lib/components/List/ListItem.svelte';
  import Tag from '$lib/components/Tag/Tag.svelte';
  import Paragraph from '$lib/components/Typography/Paragraph/Paragraph.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    Select,
    Tooltip,
    Tabs,
    TabList,
    TabItem,
    TabContent,
    Files,
  } from '$lib';
  import InformationSquareFillIcon from '@navikt/aksel-icons/svg/InformationSquareFill.svg?raw';
  import CheckmarkCircleFillIcon from '@navikt/aksel-icons/svg/CheckmarkCircleFill.svg?raw';
  import XMarkOctagonFillIcon from '@navikt/aksel-icons/svg/XMarkOctagonFill.svg?raw';
  import Spinner from '$lib/components/Spinner/Spinner.svelte';
  import CheckboxGroup from '$lib/components/Form/Checkbox/CheckboxGroup.svelte';
  import Textarea from '$lib/components/Form/Textarea/Textarea.svelte';
  import Search from '$lib/components/Form/Search/Search.svelte';
  import DropdownMenu from '$lib/components/Dropdown/DropdownMenu.svelte';

  function handleTabChange(value) {
    // console.log('Tab changed:', value);
  }

  let isModalOpen = false;
  let isModal2Open = false;
  let isDangerModalOpen = false;
  let showTextfieldError = false;
  let showSearchError = false;

  function openModal(event) {
    event.stopPropagation();
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  let textfieldValue = '';
  let searchValue = '';
  let isSwitchChecked = false;

  let textareaValue = '';

  function handleSwitchClickEvent(event) {
    console.log('switch clicked', event);
  }

  function handleSwitchChangeEvent(event) {
    console.log('switch change', event.detail);
  }

  let selectedValue;
  let selectedValues;
  let selectedCheckValue = false;

  let showError = false;
  function toggleShowError() {
    showError = !showError;
  }

  let isInline = false;
  function toggleInline() {
    isInline = !isInline;
  }

  let isHideLegend = false;
  function toggleIsHideLegend() {
    isHideLegend = !isHideLegend;
  }

  let isDisabled = false;
  function toggleIsDisabled() {
    isDisabled = !isDisabled;
  }

  let isReadOnly = false;
  function toggleIsReadOnly() {
    isReadOnly = !isReadOnly;
  }

  // SELECT

  let singleSelectValue = '';
  let multiSelectValues = [];

  $: options = [
    { label: 'Norge', value: '1' },
    { label: 'Sverige', value: '2' },
    { label: 'Outer Planets Alliance', value: '3' },
    { label: 'Outer Planets Alliance', value: '4' },
    { label: 'Outer Planets Alliance', value: '5' },
    { label: 'Outer Planets Alliance', value: '6' },
    { label: 'Outer Planets Alliance', value: '7' },
    { label: 'Outer Planets Alliance', value: '8' },
    { label: 'Outer Planets Alliance', value: '9' },
    { label: 'Outer Planets Alliance', value: '10' },
    { label: 'Outer Planets Alliance', value: '11' },
    { label: 'Outer Planets Alliance', value: '12' },
    { label: 'Outer Planets Alliance', value: '13' },
    { label: 'Outer Planets Alliance', value: '14' },
  ];

  $: optionsWithDescriptions = [
    {
      label: 'Norge',
      value: '1',
      description: 'Dårlige i fotball, gode i olje',
    },
    {
      label: 'Sverige',
      value: '2',
      description: 'Bedre i fotball, snakker litt rart',
    },
    {
      label: 'Outer Planets Alliance',
      value: '3',
      description:
        'Undertrykkede masser som må finne seg i det meste, inntil videre',
    },
  ];

  $: unSelected = null;

  let singlePreSelected = { label: 'Sverige', value: '2' };

  $: multiUnselected = [];

  let multiPreselected = [
    { label: 'Norge', value: '1' },
    { label: 'Outer Planets Alliance', value: '3' },
  ];

  function changeSelected() {
    unSelected = { label: 'Sverige', value: '2' };
  }

  $: if (unSelected) console.debug('here', unSelected);

  //dropdown:
  $: dropdownPlacements = [
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' },
    { label: 'bottom-start', value: 'bottom-start' },
    { label: 'bottom-end', value: 'bottom-end' },
    { label: 'bottom', value: 'bottom' },
    { label: 'top', value: 'top' },
    { label: 'top-start', value: 'top-start' },
    { label: 'top-end', value: 'top-end' },
    { label: 'right-start', value: 'right-start' },
    { label: 'right-end', value: 'right-end' },
    { label: 'left-start', value: 'left-start' },
    { label: 'left-end', value: 'left-end' },
  ];

  let currentDropdownPlacement = {
    label: 'bottom-start',
    value: 'bottom-start',
  };
  let menuVisible = false;
  let dropdownButtons = [];

  function handleDropdownClosing(value) {
    console.log('DropdownClosing', value);
  }
</script>

<h1>Test components here!</h1>

<h1 class="componentHeader">SWITCH</h1>
<br />
<Switch
  on:click={handleSwitchClickEvent}
  on:change={handleSwitchChangeEvent}
  id="switch"
  bind:checked={isSwitchChecked}>Switch</Switch
>

<Switch checked={isSwitchChecked} disabled>Disabled Switch</Switch>
<Switch checked={isSwitchChecked} readOnly>Readonly Switch</Switch>
<Switch
  checked={isSwitchChecked}
  position="right"
  id="switch1"
  description="Ipsum lorem dorem durem">Switch Label right</Switch
>

<Switch
  checked={isSwitchChecked}
  id="switch2"
  description="Ipsum lorem dorem durem">Switch with Description</Switch
>

<br />
<h1 class="componentHeader">BUTTON</h1>
<br />

<div class="display-flex">
  <Button>First</Button>
  <Button color="neutral">Secondary</Button>
  <Button disabled={true} color="danger">Danger</Button>
  <Button variant="secondary">Variant secondary</Button>
  <Button variant="tertiary">Variant tertiary</Button>
  <Button iconPlacement="right" fullWidth={true}>
    <svg
      width="1rem"
      height="1rem"
      slot="icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm5.047 5.671 1.399 1.43-8.728 8.398L6 14.02l1.395-1.434 2.319 2.118 7.333-7.032Z"
        fill="currentColor"
      />
    </svg>
    First Icon
  </Button>
</div>

<br />
<h1 class="componentHeader">TEXTFIELD</h1>
<br />
<Switch bind:checked={showTextfieldError}>Show Error</Switch>
<Textfield
  bind:value={textfieldValue}
  error={showTextfieldError ? 'Lorem ipsum error' : ''}
  size="md"
  characterLimit={10}
  style="width: 50%"
  characterLimitLabel={(count) =>
    count > -1
      ? `Du har ${count} tegn igjen.`
      : `Du har ${Math.abs(count)} tegn for mye.`}
/>
<br />
<Textfield
  bind:value={textfieldValue}
  error={showTextfieldError ? 'Lorem ipsum error' : ''}
  size="md"
  label="Textfield Overskrift"
  description="Beskrivelse"
  readOnly={true}
/>

<br />
<h1 class="componentHeader">TEXTAREA</h1>
<br />

<Textarea
  bind:value={textareaValue}
  label="Overskrift"
  size="lg"
  description="Beskrivelse"
  error="Lorem ipsum error"
  style="width: 50%"
  hideLabel={false}
  characterLimit={10}
  characterLimitLabel={(count) =>
    count > -1
      ? `Du har ${count} tegn igjen.`
      : `Du har ${Math.abs(count)} tegn for mye.`}
/>

<br />
<h1 class="componentHeader">SEARCH</h1>
<br />
<Switch bind:checked={showSearchError}>Show Error</Switch>
<Search
  bind:value={searchValue}
  error={showSearchError ? 'Lorem ipsum error' : ''}
  size="large"
  characterLimit={10}
  placeholder="Søk"
  characterLimitLabel={(count) =>
    count > -1
      ? `Du har ${count} tegn igjen.`
      : `Du har ${Math.abs(count)} tegn for mye.`}
/>
<br />
<br />
<Search
  bind:value={searchValue}
  error={showSearchError ? 'Lorem ipsum error' : ''}
  size="medium"
  characterLimit={10}
  placeholder="Annen placeholder"
  variant="primary"
  characterLimitLabel={(count) =>
    count > -1
      ? `Du har ${count} tegn igjen.`
      : `Du har ${Math.abs(count)} tegn for mye.`}
/>

<br />
<h1 class="componentHeader">LINK</h1>
<br />

<Link href="/">Link</Link>
<br />
<br />
<Link href="/" color="neutral"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    focusable="false"
    role="img"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M20.532 3.471A.75.75 0 0 1 20.75 4v7.5a.75.75 0 0 1-1.5 0V5.81l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72H12.5a.75.75 0 0 1 0-1.5H20c.206 0 .393.083.529.218l.001.002zM4.75 9A.25.25 0 0 1 5 8.75h7a.75.75 0 0 0 0-1.5H5A1.75 1.75 0 0 0 3.25 9v10c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 16.75 19v-7a.75.75 0 0 0-1.5 0v7a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25z"
      clip-rule="evenodd"
    />
  </svg>
  Link
</Link>

<h1 class="componentHeader">PARAGRAPH</h1>
<br />
<Paragraph spacing variant="long">Lorem ipsum dorem</Paragraph>

<br />
<h1 class="componentHeader">ALERT</h1>
<br />

<Alert severity="success">Alert (success)</Alert>
<br />
<Alert severity="danger">Alert (danger)</Alert>
<br />
<Alert severity="info">Alert (info, default)</Alert>
<br />
<Alert severity="warning" size="lg">
  <h4 style="margin: 0; padding: 0 0 5px 0;">Alert (warning)</h4>
  <p style="margin: 0; padding: 0;">En utfyllende tekst</p>
</Alert>

<br />
<h1 class="componentHeader">LIST</h1>
<br />

<h2>Styled list:</h2>

<List>
  <ListItem>Element 1</ListItem>
  <ListItem>Element 2</ListItem>
  <List size="lg">
    <ListItem>Under element 1</ListItem>
    <ListItem>Under element 2</ListItem>
  </List>
  <ListItem>Element 3</ListItem>
</List>

<h2>Unstyled list:</h2>

<List as="none" size="sm">
  <ListItem className="no-padding">Element 1</ListItem>
  <ListItem className="no-padding">Element 2</ListItem>
</List>

<br />
<h1 class="componentHeader">TAG</h1>
<br />

<div class="display-flex">
  <Tag color="brand1" hasBorder={true}>Tag Primary</Tag>
  <Tag color="brand2" hasBorder={true}>Tag Secondary</Tag>
  <Tag color="brand3" hasBorder={true}>Tag tertiary</Tag>
  <Tag color="neutral">Tag neutral</Tag>
  <Tag color="success">Tag success</Tag>
  <Tag color="warning">Tag warning</Tag>
  <Tag color="danger">Tag danger</Tag>
  <Tag color="info">Tag info</Tag>
  <Tag size="small">Tag small</Tag>
  <Tag size="medium">Tag medium</Tag>
  <Tag size="large" hasBorder={true}>Tag large</Tag>
</div>

<br />
<br />
<h1 class="componentHeader">ACCORDION</h1>
<br />
<Accordion border={true} color="brand1">
  <AccordionItem>
    <AccordionHeader level={1}>
      <span slot="header">
        Hvem kan registrere seg i Frivillighetsregisteret?
      </span>
    </AccordionHeader>
    <AccordionContent>
      <span slot="content">
        For å kunne bli registrert i Frivillighetsregisteret, må organisasjonen
        drive frivillig virksomhet. Det er bare foreninger, stiftelser og
        aksjeselskap som kan registreres. Virksomheten kan ikke dele ut midler
        til fysiske personer. Virksomheten må ha et styre.
      </span>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader level={4}>
      <svelte:fragment slot="header">
        <span>Hvordan går jeg fram for å</span>
        <span>registrere i Frivillighetsregisteret?</span>
      </svelte:fragment>
    </AccordionHeader>
    <AccordionContent>
      <svelte:fragment slot="content">
        <span
          >Virksomheten må være registrert i Enhetsregisteret før den kan bli</span
        >
        <span
          >registrert i Frivillighetsregisteret. Du kan registrere i begge</span
        >
        <span>registrene samtidig i Samordnet registermelding.</span>
      </svelte:fragment>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<br />
<br />
<h1 class="componentHeader">MODAL</h1>
<br />

<div style="display: flex; gap: 2rem">
  <Button on:click={openModal}>Open Modal</Button>
  <Button on:click={() => (isDangerModalOpen = true)}>Open Danger Modal</Button>
</div>

{#if isModalOpen}
  <Modal onClose={closeModal}>
    <div slot="header">Modal header</div>
    <div slot="content">
      <p style="font-size: 300%;">
        Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien.
        Lorem Ipsum har vært bransjens standard for dummytekst helt siden
        1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å
        lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann
        usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også
        tålt spranget over til elektronisk typografi uten vesentlige endringer.
        Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av
        Letraset-ark med avsnitt fra Lorem Ipsum, og senere med
        sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem
        Ipsum for dummytekst. Hvorfor bruker vi det? Det er et velkjent faktum
        at lesere distraheres av lesbart innhold på en side når man ser på dens
        layout. Poenget med å bruke Lorem Ipsum er at det har en mer eller
        mindre normal fordeling av bokstaver i ord, i motsetning til 'Innhold
        her, innhold her', og gir inntrykk av å være lesbar tekst. Mange
        webside- og sideombrekkingsprogrammer bruker nå Lorem Ipsum som sin
        standard for provisorisk tekst, og et søk etter 'Lorem Ipsum' vil
        avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i
        senere år, noen ved rene uhell og andre mer planlagte (med humor o.l.).
      </p>
      <Button on:click={() => (isModal2Open = true)}>Open Modal 2</Button>
      {#if isModal2Open}
        <Modal onClose={() => (isModal2Open = false)}
          ><p slot="content">More Text</p></Modal
        >
      {/if}
    </div>
    <div slot="footer" style="display: flex; gap: 0.5rem">
      <Button variant="primary" on:click={closeModal}>Save</Button>
      <Button variant="secondary" on:click={closeModal}>Close</Button>
    </div>
  </Modal>
{/if}

{#if isDangerModalOpen}
  <Modal onClose={() => (isDangerModalOpen = false)}>
    <div slot="header" style="color: #c22020">Danger Modal header</div>
    <div slot="content">
      <p>Dangerous stuff here! Spooky!</p>
      <hr style="border-top: 1px dashed red;" />
    </div>

    <div slot="footer" style="display: flex; gap: 0.5rem">
      <Button
        variant="primary"
        color="danger"
        on:click={() => (isDangerModalOpen = false)}>Oh no!</Button
      >
      <Button variant="secondary" on:click={() => (isDangerModalOpen = false)}
        >Close</Button
      >
    </div>
  </Modal>
{/if}

<br />
<br />
<h1 class="componentHeader">RADIO</h1>
<RadioGroup
  bind:value={selectedValue}
  inline={isInline}
  legend="RadioGroup legend"
  description="RadioGroup description"
  size="lg"
  defaultValue={true ? 'option1' : 'option2'}
  readOnly={isReadOnly}
  disabled={isDisabled}
  error={showError ? 'Lorem ipsum error.' : ''}
  hideLegend={isHideLegend}
>
  <Radio value="option1" label="Lorem ipsum label." />
  <Radio
    value="option2"
    label="Lorem ipsum dolor sit label."
    description="Lorem ipsum dolor sit description."
  />
  <Radio
    readOnly={true}
    value="option3"
    label="Lorem ipsum dolor sit amet readonly label."
    description="Lorem ipsum dolor sit amet readonly description."
  />
  <Radio
    disabled={true}
    value="option4"
    label="Lorem ipsum dolor sit amet disabled label."
    description="Lorem ipsum dolor sit amet disabled description."
  />
</RadioGroup>
<p>Selected RadioGroup value: {selectedValue}</p>

<div style="display: flex; gap: 2rem">
  <Button on:click={toggleIsHideLegend}
    >{isHideLegend ? 'Show legend' : 'Hide legend'}</Button
  >
  <Button on:click={toggleInline}>{isInline ? 'Vertical' : 'Inline'}</Button>
  <Button on:click={toggleShowError}
    >{showError ? 'Hide error' : 'Show error'}</Button
  >
  <Button on:click={toggleIsDisabled}
    >{isDisabled ? 'Enable' : 'Disable'}</Button
  >
  <Button on:click={toggleIsReadOnly}
    >{isReadOnly ? 'Selectable' : 'ReadOnly'}</Button
  >
</div>
<br />
<h1 class="componentHeader">CHECKBOX</h1>
<div class="selectForm">
  <h3>Standalone Checkbox</h3>
  <Checkbox
    value="standalone"
    bind:checked={selectedCheckValue}
    label="Lorem ipsum standalone label"
    description="Lorem ipsum standalone description"
  />
  <p>Checked value: {selectedCheckValue}</p>
  <h3>Checkbox Group</h3>
  <CheckboxGroup
    bind:value={selectedValues}
    legend="CheckboxGroup legend"
    description="CheckboxGroup description"
    size="md"
    defaultValue={['option2']}
    readOnly={isReadOnly}
    disabled={isDisabled}
    error={showError ? 'Lorem ipsum error.' : ''}
    hideLegend={isHideLegend}
  >
    <Checkbox value="option1" label="Lorem ipsum label" />
    <Checkbox
      value="option2"
      label="Lorem ipsum pre-selected label"
      description="Lorem ipsum description"
    />
    <Checkbox
      value="option3"
      label="Lorem ipsum readonly label"
      description="Lorem ipsum readonly description"
      readOnly
    />
    <Checkbox
      value="option4"
      label="Lorem ipsum disabled label"
      description="Lorem ipsum disabled description"
      disabled
    />
  </CheckboxGroup>
  <p>Selected values: {selectedValues}</p>
</div>
<br />

<Button on:click={changeSelected}>Change selected</Button>

<h1 class="componentHeader">SELECT</h1>

<Button on:click={() => console.log('unSelected', unSelected)}>LogValue</Button>
<br />
<div class="selectForm">
  <Select
    options={[]}
    bind:selected={unSelected}
    label="Single, unselected"
    hideSelected
    clearable
    size="large"
    emptyOptionsPlaceholder="No options available"
    dropdownGap={10}
  />
  <Select
    {options}
    bind:selected={singlePreSelected}
    label="Single, preselected"
  />

  <Select
    {options}
    bind:selected={unSelected}
    label="Single, has filter"
    hasFilter
  />

  <Select
    {options}
    bind:selected={unSelected}
    placeholder="Placeholder text"
    label="Single w/ placeholder & description"
    description="Dette er en beskrivelse"
  />

  <Select
    {options}
    bind:selected={unSelected}
    error="Error message"
    label="Single, unselected, w/ error"
  />

  <Select
    options={optionsWithDescriptions}
    bind:selected={unSelected}
    label="Single, unselected, w/ option descriptions"
  />

  <Select
    {options}
    bind:selected={singlePreSelected}
    label="Single, preselected, readonly"
    readOnly
    size="large"
  />
</div>
<br />
<h1 class="componentHeader">MULTI SELECT</h1>
<br />
<div class="selectForm">
  <Select
    {options}
    bind:selected={multiUnselected}
    multiple
    label="Multi, unselected"
  />

  <Select
    {options}
    bind:selected={multiUnselected}
    multiple
    hasFilter
    label="Multi, has filter"
  />

  <Select
    {options}
    bind:selected={multiPreselected}
    multiple
    label="Multi, preselected"
  />

  <Select
    {options}
    bind:selected={multiPreselected}
    disabled
    multiple
    label="Multi, preselected, disabled"
  />

  <Select
    {options}
    bind:selected={multiPreselected}
    readOnly
    multiple
    size="lg"
    label="Multi, preselected, readonly"
  />

  <Select
    options={optionsWithDescriptions}
    bind:selected={multiUnselected}
    multiple
    label="Multi, unselected, w/ option descriptions"
  />
</div>
<br />

<h1 class="componentHeader">Tabs</h1>
<div class="tabs">
  <Tabs onChange={handleTabChange} size="md">
    <TabList>
      <TabItem value="1" icon={InformationSquareFillIcon}>Tab 1</TabItem>
      <TabItem value="2" icon={CheckmarkCircleFillIcon}>Tab 2</TabItem>
      <TabItem value="3" icon={XMarkOctagonFillIcon}>Tab 3</TabItem>
    </TabList>
    <TabContent value="1"><button>Content 1</button></TabContent>
    <TabContent value="2">Content 2</TabContent>
    <TabContent value="3">Content 3</TabContent>
  </Tabs>
</div>

<Tabs onChange={handleTabChange} size="lg" defaultValue="3">
  <TabList>
    <TabItem value="1" icon={InformationSquareFillIcon}>Tab 1</TabItem>
    <TabItem value="2" icon={CheckmarkCircleFillIcon}>Tab 2</TabItem>
    <TabItem value="3" icon={XMarkOctagonFillIcon}>Tab 3</TabItem>
  </TabList>
  <TabContent value="1"><button>Content 1</button></TabContent>
  <TabContent value="2">Content 2</TabContent>
  <TabContent value="3">Content 3</TabContent>
</Tabs>

<h1 class="componentHeader">Dropdown</h1>
<div style="display: flex; align-items: center;gap: 5rem;">
  <Select
    options={dropdownPlacements}
    bind:selected={currentDropdownPlacement}
    label="Placement"
  />

  {#each [0, 1, 2] as i (i)}
    <div class="dropdown">
      <div
        bind:this={dropdownButtons[i]}
        style="display: inline-block; box-sizing: border-box;"
      >
        <Button
          aria-haspopup="menu"
          aria-expanded={menuVisible}
          on:click={() => {
            menuVisible = true;
          }}
        >
          Click me
        </Button>
      </div>
      {#if menuVisible}
        <DropdownMenu
          let:C
          gap={i * 5}
          placement={currentDropdownPlacement.value}
          size={i == 0 ? 'small' : i == 1 ? 'medium' : 'large'}
          anchorEl={dropdownButtons[i]}
          onClose={() => handleDropdownClosing(i)}
        >
          <C.MenuGroup heading={'Links'}>
            <C.MenuItem
              on:Click={(e) => {
                console.log('clicked');
              }}
            >
              Test onClick event {i}
            </C.MenuItem>
            <C.MenuItem href="https://designsystemet.no" target="_blank">
              Designsystemet.no
            </C.MenuItem>
          </C.MenuGroup>
          <C.Divider />
          <C.MenuGroup>
            <C.MenuItem IconComponent={Files}>Element link {i}</C.MenuItem>
            <C.MenuItem
              IconComponent={Files}
              on:Click={() => {
                isModalOpen = true;
              }}>Element link {i + 1}</C.MenuItem
            >
          </C.MenuGroup>
        </DropdownMenu>
      {/if}
    </div>
  {/each}
</div>
<h1 class="componentHeader">Tooltip</h1>
<Tooltip content="Tooltip text" placement="top-start" showArrow={true}>
  <Button slot="anchor">Click me to display a Tooltip</Button>
  <span slot="content">Tooltip text</span>
</Tooltip>
<Tooltip content="Tooltip text" placement="top" showArrow={true}>
  <Button slot="anchor">Click me to display a Tooltip</Button>
  <ul style="margin: 0" slot="content">
    <li>First</li>
    <li>Second</li>
  </ul>
</Tooltip>

<p>
  Tooltips kan også legges <nobr
    ><Tooltip open={true} placement="bottom">
      <abbr
        slot="anchor"
        style="font-weight: bold; text-decoration: underline dotted;"
        >til i en tekst</abbr
      >
      <span slot="content">Ganske kult?</span>
    </Tooltip>
  </nobr> for å gi mer informasjon!
</p>

<h1 class="componentHeader">Spinner</h1>
<div class="spinner">
  <Spinner size="xLarge" title="xLarge" />
  <Spinner size="large" title="large" />
  <Spinner size="medium" title="medium" />
  <Spinner size="small" title="small" />
  <Spinner size="xSmall" title="xSmall" />
</div>
<div class="spinner">
  <Spinner size="xLarge" title="xLarge accent" color="accent" />
  <Spinner size="xLarge" title="xLarge neutral (default)" color="neutral" />
</div>
<br />
<br />

<style>
  .componentHeader {
    width: 100%;
    background-color: pink;
  }

  .selectForm {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: var(--fds-spacing-2);
  }
  .dropdown {
    position: relative;
  }
  .display-flex {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .tabs {
    width: 50%;
  }
</style>
