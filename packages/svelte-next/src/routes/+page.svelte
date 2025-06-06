<script lang="ts">
  import { run } from 'svelte/legacy';

  // @ts-nocheck
  import {
    Alert,
    Button,
    Switch,
    Radio,
    RadioGroup,
    Textfield,
    Checkbox,
    Link,
    List,
    ListItem,
    Tag,
    Paragraph,
    Modal,
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
    CheckboxGroup,
    Textarea,
    Search,
    DropdownMenu,
    Chip,
    ChipGroup,
    Spinner,
    Table,
    TableHeaderCell,
    TableCell,
    TableRow,
  } from '$lib';

  import { Files, Pencil } from '../lib/components/Dropdown/index.js';
  import { House, Cog } from '../lib/components/Tabs/index.js';
  import { type MenuGroup } from '$lib/components/Dropdown/DropdownMenu.svelte';

  function handleTabChange(value) {
    // console.log('Tab changed:', value);
  }

  let isModalOpen = $state(false);
  let isModal2Open = $state(false);
  let isDangerModalOpen = $state(false);
  let showTextfieldError = $state(false);
  let showSearchError = $state(false);

  function openModal(event) {
    event.stopPropagation();
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  let textfieldValue = $state('');
  let searchValue = $state('');
  let isSwitchChecked = $state(false);

  let textareaValue = $state('');

  function handleSwitchClickEvent(event) {
    console.log('switch clicked', event);
  }

  function handleSwitchChangeEvent(event) {
    console.log('switch change', event.detail);
  }

  let selectedValue = $state();
  let selectedValues = $state([]);
  let selectedCheckValue = $state(false);

  let showError = $state(false);
  function toggleShowError() {
    showError = !showError;
  }

  let isInline = $state(false);
  function toggleInline() {
    isInline = !isInline;
  }

  let isHideLegend = $state(false);
  function toggleIsHideLegend() {
    isHideLegend = !isHideLegend;
  }

  let isDisabled = $state(false);
  function toggleIsDisabled() {
    isDisabled = !isDisabled;
  }

  let isReadOnly = $state(false);
  function toggleIsReadOnly() {
    isReadOnly = !isReadOnly;
  }

  // SELECT
  let options = $state([
    {
      label: 'Norge',
      value: '1',
      description: 'Dårlige i fotball, gode i olje',
    },
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
  ]);

  let optionsWithDescriptions = $state([
    {
      label: 'Norge',
      value: '1',
      description: 'Dårlige i fotball, gode i olje',
      tag: { tooltipText: 'Wowo', text: 'test1', color: 'warning' },
    },
    {
      label: 'Sverige',
      value: '2',
      description: 'Bedre i fotball, snakker litt rart',
      tag: { tooltipText: 'Wowo2', text: 'test2', color: 'danger' },
    },
    {
      label: 'Outer Planets Alliance',
      value: '3',
      description:
        'Undertrykkede masser som må finne seg i det meste, inntil videre',
      tag: { tooltipText: 'Wowo3', text: 'test3', color: 'info' },
    },
  ]);

  let unSelected = $state(null);
  let unSelectedFilter = $state(null);
  let unSelectedDesc = $state(null);
  let unSelectedError = $state(null);
  let unSelectedWithDesc = $state(null);

  let singlePreSelected = $state(options[2]);

  let multiUnselected = $state([]);

  let multiPreselected = $state([options[0], options[2]]);

  function changeSelected() {
    unSelected = { label: 'Sverige', value: '2' };
  }

  $effect(() => {
    // Update other select states based on unSelected if needed
    if (unSelected && unSelected.value) {
      console.debug('Selected value changed:', unSelected);
    }
    if (multiUnselected && multiUnselected.length > 0) {
      console.debug('Multi selected values:', multiUnselected);
    }
  });

  const menuData: MenuGroup[] = [
    {
      heading: 'Links 123',
      items: [
        {
          text: 'Test onClick event',
          onClick: (e: Event) => {
            console.log('clicked');
          },
        },
        {
          text: 'Designsystemet.no',
          href: 'https://designsystemet.no',
          target: '_blank',
        },
      ],
    },
    {
      items: [
        {
          text: 'Element link',
          iconComponent: Files,
        },
        {
          text: 'Element link 2',
          iconComponent: Pencil,
          onClick: (e: Event) => {
            // Endrer tilstand på modal
            isModalOpen = true;
          },
        },
      ],
    },
  ];

  const menuData1: MenuGroup[] = [
    {
      heading: 'Links 456',
      items: [
        {
          text: 'console.log onClick event',
          onClick: (e: Event) => {
            console.log('clicked');
          },
        },
        {
          text: 'Egde.no',
          href: 'https://egde.no',
          target: '_blank',
        },
      ],
    },
    {
      items: [
        {
          text: 'Element link',
          iconComponent: Files,
        },
        {
          text: 'Element link 2',
          iconComponent: Pencil,
          onClick: (e: Event) => {
            // Endrer tilstand på modal
            isModalOpen = true;
          },
        },
      ],
    },
  ];

  let dropdownPlacements = $derived([
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
  ]);

  let currentDropdownPlacement = $state({
    label: 'bottom-start',
    value: 'bottom-start',
  });

  let menuVisible = $state(false);
  let dropdownButtons = $state([]);

  function handleDropdownClosing(value) {
    menuVisible = false;
    console.log('DropdownClosing', value);
  }

  let sortedData = $state([]);
  let currentSortField = $state(undefined);

  let bergljotSortedData = $state([]);
  const bergljot = [
    {
      id: '4FWlFAdynkSIY-J315hG7N-d8Fco_qtGkbla02DuzXQ',
      userId: '14a555e0-7207-449e-8863-e277d79846ec',
      userName: 'Fardal, Helene',
      appRoleId: 'f1cc7f81-8679-4961-9619-6b43bba888d7',
      appRoleName: 'Administrator',
      applicationClientId: '2f46d81c-14f1-4023-b550-d6088ffad8da',
      applicationName: 'Kommunebildet Staf Azure TEST',
      lastActivity: null,
    },
    {
      id: 'HGX-dSHVSEyHs5w_SWkgaaiitOaZqSdAtYlL0K126xk',
      userId: '75fe651c-d521-4c48-87b3-9c3f49692069',
      userName: 'Gunnar Gudlaugsson (External - Egde)',
      appRoleId: 'f1cc7f81-8679-4961-9619-6b43bba888d7',
      appRoleName: 'Administrator',
      applicationClientId: '2f46d81c-14f1-4023-b550-d6088ffad8da',
      applicationName: 'Kommunebildet Staf Azure TEST',
      lastActivity: '2024-12-19T15:39:02+00:00',
    },
    {
      id: 'e0fQwwx3LU6Z2uS7qQ5XfS1CBPLtO-lJnymhg4s_qaA',
      userId: 'c3d0477b-770c-4e2d-99da-e4bba90e577d',
      userName: 'Philip Rothschild (External - Egde)',
      appRoleId: 'f1cc7f81-8679-4961-9619-6b43bba888d7',
      appRoleName: 'Administrator',
      applicationClientId: '2f46d81c-14f1-4023-b550-d6088ffad8da',
      applicationName: 'Kommunebildet Staf Azure TEST',
      lastActivity: null,
    },
    {
      id: 'HDzvzSuFdEmQb5SqMsdvP-vbzFmJhfRIhev4PP0BaaA',
      userId: 'cdef3c1c-852b-4974-906f-94aa32c76f3f',
      userName: 'Kjetil Ribe (External - Egde)',
      appRoleId: 'f1cc7f81-8679-4961-9619-6b43bba888d7',
      appRoleName: 'Administrator',
      applicationClientId: '2f46d81c-14f1-4023-b550-d6088ffad8da',
      applicationName: 'Kommunebildet Staf Azure TEST',
      lastActivity: '2024-09-03T10:56:17+00:00',
    },
  ];

  const dummyData = [
    {
      id: 1,
      navn: 'Lise Nordmann',
      epost: 'lise@nordmann.no',
      telefon: 22345678,
    },
    {
      id: 2,
      navn: 'Kari Nordmann',
      epost: 'kari@nordmann.no',
      telefon: 87654321,
    },
    {
      id: 3,
      navn: 'Ola Nordmann',
      epost: 'ola@nordmann.no',
      telefon: 32345678,
    },
    {
      id: 4,
      navn: 'Per Nordmann',
      epost: 'per@nordmann.no',
      telefon: 12345678,
    },
    {
      id: 5,
      navn: 'Julie Nordmann',
      epost: 'julie@nordmann.no',
      telefon: 14646478,
    },
    {
      id: 6,
      navn: 'Roger Nordmann',
      epost: 'roger@nordmann.no',
      telefon: 66645678,
    },
  ];
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
  <Button onclick={() => alert('Works')}>First</Button>
  <Button color="neutral" onclick={() => alert('works2')}>Secondary</Button>
  <Button disabled={true} color="danger">Danger</Button>
  <Button variant="secondary">Variant secondary</Button>
  <Button variant="tertiary">Variant tertiary</Button>
  <Button iconPlacement="right789" fullWidth={true}>
    {#snippet icon()}
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
    {/snippet}
    First icon
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

<Link href="https://www.egde.no" target="_blank">Link</Link>
<br />
<br />
<Link
  href="/"
  color="neutral"
  onclick={(e) => {
    e.preventDefault();
    alert('Link clicked!');
  }}
  as="button"
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
      {#snippet header()}
        <span>Hvem kan registrere seg i Frivillighetsregisteret?</span>
      {/snippet}
    </AccordionHeader>
    <AccordionContent>
      {#snippet content()}
        <span
          >For å kunne bli registrert i Frivillighetsregisteret, må
          organisasjonen drive frivillig virksomhet. Det er bare foreninger,
          stiftelser og aksjeselskap som kan registreres. Virksomheten kan ikke
          dele ut midler til fysiske personer. Virksomheten må ha et styre.</span
        >
      {/snippet}
    </AccordionContent>
  </AccordionItem>

  <AccordionItem>
    <AccordionHeader level={4}>
      {#snippet header()}
        <span
          >Hvordan går jeg fram for å registrere i Frivillighetsregisteret?</span
        >
      {/snippet}
    </AccordionHeader>
    <AccordionContent>
      {#snippet content()}
        <span
          >Virksomheten må være registrert i Enhetsregisteret før den kan bli</span
        >
        <span
          >registrert i Frivillighetsregisteret. Du kan registrere i begge</span
        >
        <span>registrene samtidig i Samordnet registermelding.</span>
      {/snippet}
    </AccordionContent>
  </AccordionItem>
</Accordion>

<br />
<br />
<h1 class="componentHeader">MODAL</h1>
<br />

<div style="display: flex; gap: 2rem">
  <Button onclick={openModal}>Open Modal</Button>
  <Button onclick={() => (isDangerModalOpen = true)}>Open Danger Modal</Button>
</div>

{#if isModalOpen}
  <Modal onClose={closeModal}>
    {#snippet header()}<div>Modal header</div>{/snippet}
    {#snippet content()}
      <div>
        <p style="font-size: 100%;">
          Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien.
          Lorem Ipsum har vært bransjens standard for dummytekst helt siden
          1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å
          lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann
          usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer
          også tålt spranget over til elektronisk typografi uten vesentlige
          endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved
          lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med
          sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem
          Ipsum for dummytekst. Hvorfor bruker vi det? Det er et velkjent faktum
          at lesere distraheres av lesbart innhold på en side når man ser på
          dens layout. Poenget med å bruke Lorem Ipsum er at det har en mer
          eller mindre normal fordeling av bokstaver i ord, i motsetning til
          'Innhold her, innhold her', og gir inntrykk av å være lesbar tekst.
          Mange webside- og sideombrekkingsprogrammer bruker nå Lorem Ipsum som
          sin standard for provisorisk tekst, og et søk etter 'Lorem Ipsum' vil
          avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i
          senere år, noen ved rene uhell og andre mer planlagte (med humor
          o.l.).
        </p>
        <Button onclick={() => (isModal2Open = true)}>Open Modal 2</Button>
        {#if isModal2Open}
          <Modal onClose={() => (isModal2Open = false)}>
            {#snippet content()}
              <p slot="content">More Text</p>
            {/snippet}
          </Modal>
        {/if}
      </div>
    {/snippet}
    {#snippet footer()}
      <div slot="footer" style="display: flex; gap: 0.5rem">
        <Button variant="primary" onclick={closeModal}>Save</Button>
        <Button variant="secondary" onclick={closeModal}>Close</Button>
      </div>
    {/snippet}
  </Modal>
{/if}

{#if isDangerModalOpen}
  <Modal onClose={() => (isDangerModalOpen = false)}>
    {#snippet header()}
      <div style="color: #c22020">Danger Modal header</div>
    {/snippet}
    {#snippet content()}
      <div>
        <p>Dangerous stuff here! Spooky!</p>
        <hr style="border-top: 1px dashed red;" />
      </div>
    {/snippet}
    {#snippet footer()}
      <div slot="footer" style="display: flex; gap: 0.5rem">
        <Button
          variant="primary"
          color="danger"
          onclick={() => (isDangerModalOpen = false)}
        >
          Oh no!
        </Button>
        <Button variant="secondary" onclick={() => (isDangerModalOpen = false)}
          >Close</Button
        >
      </div>
    {/snippet}
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
  <Button onclick={toggleIsHideLegend}>
    {isHideLegend ? 'Show legend' : 'Hide legend'}
  </Button>
  <Button onclick={toggleInline}>
    {isInline ? 'Vertical' : 'Inline'}
  </Button>
  <Button onclick={toggleShowError}>
    {showError ? 'Hide error' : 'Show error'}
  </Button>
  <Button onclick={toggleIsDisabled}>
    {isDisabled ? 'Enabled' : 'Disabled'}
  </Button>
  <Button onclick={toggleIsReadOnly}>
    {isReadOnly ? 'Selectable' : 'ReadOnly'}
  </Button>
</div>
<br />
<h1 class="componentHeader">CHECKBOX</h1>
<div class="selectForm">
  <h2>Standalone Checkbox</h2>
  <Checkbox
    value="standalone"
    bind:checked={selectedCheckValue}
    label="Lorem ipsum standalone label"
    description="Lorem ipsum standalone description"
  />
  <p>Checked value: {selectedCheckValue}</p>
  <h2>Checkbox Group</h2>
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

<h1 class="componentHeader">SELECT</h1>

<Button onclick={changeSelected}>Change selected</Button><br />
<Button onclick={() => console.log('unSelected', unSelected)}>LogValue</Button>
<br />
<div class="selectForm">
  <Select
    {options}
    bind:selected={unSelected}
    label="Single, unselected"
    hideSelected
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
    bind:selected={unSelectedFilter}
    label="Single, has filter"
    hasFilter
  />

  <Select
    {options}
    bind:selected={unSelectedDesc}
    placeholder="Placeholder text"
    label="Single w/ placeholder & description"
    description="Dette er en beskrivelse"
  />

  <Select
    {options}
    bind:selected={unSelectedError}
    error="Error message"
    label="Single, unselected, w/ error"
  />

  <Select
    options={optionsWithDescriptions}
    bind:selected={unSelectedWithDesc}
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
      <TabItem value="1" icon={Files}>Tab 1</TabItem>
      <TabItem value="2" icon={House}>Tab 2</TabItem>
      <TabItem value="3" icon={Pencil}>Tab 3</TabItem>
    </TabList>
    <TabContent value="1"><button>Content 1</button></TabContent>
    <TabContent value="2">Content 2</TabContent>
    <TabContent value="3">Content 3</TabContent>
  </Tabs>
</div>

<Tabs onChange={handleTabChange} size="lg" defaultValue="3">
  <TabList>
    <TabItem value="1" icon={Cog}>Tab 1</TabItem>
    <TabItem value="2" icon={House}>Tab 2</TabItem>
    <TabItem value="3" icon={Pencil}>Tab 3</TabItem>
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
    displayDropdownOnTop={true}
  />

  {#each [menuData, menuData1] as menuGroups, index (menuGroups)}
    <DropdownMenu
      {menuGroups}
      placement={currentDropdownPlacement.value}
      size={index === 0 ? 'md' : 'sm'}
      onClose={() => console.log('Dropdown closed externally')}
    >
      {#snippet buttonContent()}
        {#if index === 0}
          <House />
        {:else}
          <Cog />
        {/if}
        Dropdown {index + 1}
      {/snippet}
    </DropdownMenu>
  {/each}
</div>

<h1 class="componentHeader">Tooltip</h1>
<Tooltip content="Tooltip text" placement="top-end" showArrow={true}>
  {#snippet anchor()}
    <Button>Hover me to display a Tooltip (top-end)</Button>
  {/snippet}
  {#snippet tooltipContent()}
    <span>Tooltip text</span>
  {/snippet}
</Tooltip>
<Tooltip content="Tooltip text" placement="top" showArrow={true}>
  {#snippet anchor()}
    <Button>Hover me to display a Tooltip (top)</Button>
  {/snippet}
  {#snippet tooltipContent()}
    <ul style="margin: 0" slot="content">
      <li>First</li>
      <li>Second</li>
    </ul>
  {/snippet}
</Tooltip>

<div style="margin-top: 1rem; padding: 1rem; background-color: #f0f0f0;">
  Tooltips can also be added to a text snippet <nobr
    ><Tooltip open={true} placement="bottom">
      {#snippet anchor()}
        <abbr style="font-weight: bold; text-decoration: underline dotted;"
          >to give more</abbr
        >
      {/snippet}
      {#snippet tooltipContent()}
        <span>Pretty cool?</span>
      {/snippet}
    </Tooltip>
  </nobr>information!
</div>

<h1 class="componentHeader">Spinner</h1>
<div class="spinner">
  <Spinner size="xlarge" title="xLarge" />
  <Spinner size="large" title="large" />
  <Spinner size="medium" title="medium" />
  <Spinner size="small" title="small" />
  <Spinner size="xsmall" title="xSmall" />
</div>
<div class="spinner">
  <Spinner size="xlarge" title="xLarge accent" color="accent" />
  <Spinner size="xlarge" title="xLarge neutral (default)" color="neutral" />
</div>
<br />
<br />

<h1 class="componentHeader">Chip & ChipGroup</h1>
<Chip size="sm">Bokmål</Chip>
<Chip size="md">Engelsk</Chip>
<br />
<br />
<Chip size="lg" checkmark selected>Nynorsk</Chip>
<br />
<br />
<ChipGroup size="sm" disabled={true}>
  <Chip>Bokmål</Chip>
  <Chip checkmark selected>Engelsk</Chip>
  <Chip>Nynorsk</Chip>
</ChipGroup>

<br />
<br />

<h1 class="componentHeader">Table</h1>
<Table stickyHeader>
  {#snippet headerRow()}
    <TableRow slot="headerRow">
      <TableHeaderCell
        tableData={dummyData}
        sortFieldName="navn"
        bind:sortedData
        bind:currentSortField>Navn</TableHeaderCell
      >
      <TableHeaderCell>Epost</TableHeaderCell>
      <TableHeaderCell
        tableData={dummyData}
        sortFieldName="telefon"
        bind:sortedData
        bind:currentSortField>Telefon</TableHeaderCell
      >
    </TableRow>
  {/snippet}

  {#each sortedData as row}
    <TableRow key={row.id}>
      <TableCell>{row.navn}</TableCell>
      <TableCell>{row.epost}</TableCell>
      <TableCell>{row.telefon}</TableCell>
    </TableRow>
  {/each}
</Table>

<br />
<Table>
  {#snippet headerRow()}
    <TableRow slot="headerRow">
      <TableHeaderCell
        tableData={bergljot}
        sortFieldName="userId"
        bind:sortedData={bergljotSortedData}
        bind:currentSortField>userId</TableHeaderCell
      >
      <TableHeaderCell>userName</TableHeaderCell>
      <TableHeaderCell
        tableData={bergljot}
        sortFieldName="lastActivity"
        bind:sortedData={bergljotSortedData}
        bind:currentSortField>lastActivity</TableHeaderCell
      >
    </TableRow>
  {/snippet}
  {#each bergljotSortedData as row}
    <TableRow key={row.id}>
      <TableCell>{row.userId}</TableCell>
      <TableCell>{row.userName}</TableCell>
      <TableCell>{row.lastActivity}</TableCell>
    </TableRow>
  {/each}
</Table>

<br />

<br />
<div style="padding: 60px">
  <Table accordionColSpan={3} hasAccordionRows>
    {#snippet headerRow()}
      <TableRow slot="headerRow" isHeaderRow>
        <TableHeaderCell
          tableData={dummyData}
          sortFieldName="navn"
          bind:sortedData
          bind:currentSortField
        >
          Navn
        </TableHeaderCell>
        <TableHeaderCell tableData={dummyData} bind:sortedData
          >Epost</TableHeaderCell
        >
        <TableHeaderCell
          tableData={dummyData}
          sortFieldName="telefon"
          bind:sortedData
          bind:currentSortField
        >
          Telefon
        </TableHeaderCell>
      </TableRow>
    {/snippet}
    {#each sortedData as row}
      <TableRow key={row.id} clickable>
        <TableCell>{row.navn}</TableCell>
        <TableCell>{row.epost}</TableCell>
        <TableCell>{row.telefon}</TableCell>
        {#snippet accordionContent()}
          <div style="display: flex; gap: 1rem; align-items: center">
            Her kan du plassere innhold av ulike slag. Dvs. <b>tekst</b> eller
            andre komponenter: <Button>Click</Button>
          </div>
        {/snippet}
      </TableRow>
    {/each}
  </Table>
</div>
<br />
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
  .display-flex {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .tabs {
    width: 50%;
  }
</style>
