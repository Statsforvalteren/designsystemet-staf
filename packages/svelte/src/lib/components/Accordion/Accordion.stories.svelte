<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Accordion from './Accordion.svelte';
  import AccordionContent from './AccordionContent.svelte';
  import AccordionItem from './AccordionItem.svelte';
  import AccordionHeader from './AccordionHeader.svelte';
  import { writable } from 'svelte/store';

  const { Story } = defineMeta({
    title: 'Komponenter/Accordion',
    component: Accordion,
    subcomponents: { AccordionContent, AccordionItem, AccordionHeader },
  });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <Accordion {...args}>
    <AccordionItem>
      <AccordionHeader level={2}>
        <span slot="header">
          Hvor kan jeg logge meg inn på nettsidene deres?</span
        >
      </AccordionHeader>
      <AccordionContent>
        <span slot="content">
          Trykk på "logg inn knappen" øverst på siden.
        </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader level={2}>
        <svelte:fragment slot="header">
          <span>Hvordan sletter jeg kontoen min?</span>
        </svelte:fragment>
      </AccordionHeader>
      <AccordionContent>
        <svelte:fragment slot="content">
          <span>Gå til kontoinnstillinger og finn "slett konto".</span>
        </svelte:fragment>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
{/snippet}

<Story name="Default" />

<Story name="With border and branding">
  <Accordion border={true} color="brand1">
    <AccordionItem>
      <AccordionHeader level={1}>
        <span slot="header">
          Hvor kan jeg logge meg inn på nettsidene deres?</span
        >
      </AccordionHeader>
      <AccordionContent>
        <span slot="content">
          Trykk på "logg inn knappen" øverst på siden.
        </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader level={2}>
        <svelte:fragment slot="header">
          <span>Hvordan sletter jeg kontoen min?</span>
        </svelte:fragment>
      </AccordionHeader>
      <AccordionContent>
        <svelte:fragment slot="content">
          <span>Gå til kontoinnstillinger og finn "slett konto".</span>
        </svelte:fragment>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Story>

<Story name="Open by default">
  <Accordion border={true} color="brand3">
    <AccordionItem open={writable(true)}>
      <AccordionHeader level={1}>
        <span slot="header"
          >Lære noe nytt om agurker. Lære noe nytt om agurker. Lære noe nytt om
          agurker. Lære noe nytt om agurker.</span
        >
      </AccordionHeader>
      <AccordionContent>
        <span slot="content">Agurker er grønne. </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem open={writable(true)}>
      <AccordionHeader level={4}>
        <svelte:fragment slot="header">
          <span
            >Lære noe nytt om tomater. Lære noe nytt om tomater. Lære noe nytt
            om tomater. Lære noe nytt om tomater.</span
          >
        </svelte:fragment>
      </AccordionHeader>
      <AccordionContent>
        <svelte:fragment slot="content">
          <span>En tomat er faktisk en frukt.</span>
        </svelte:fragment>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Story>
