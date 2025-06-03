<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordion from './Accordion.svelte';
  import AccordionContent from './AccordionContent.svelte';
  import AccordionItem from './AccordionItem.svelte';
  import AccordionHeader from './AccordionHeader.svelte';
  import { writable } from 'svelte/store';

  const { Story } = defineMeta({
    title: 'Komponenter/Accordion',
    component: Accordion,
    // @ts-ignore Type error because subcomponents need to be isomorphic to main component.
    subcomponents: { AccordionContent, AccordionItem, AccordionHeader },
    render: template,
  });
</script>

{#snippet template(args)}
  <Accordion {...args}>
    <AccordionItem>
      <AccordionHeader level={1}>
        {#snippet header()}
          <div>Hvor kan jeg logge meg inn på nettsidene deres?</div>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span> Trykk på "logg inn knappen" øverst på siden. </span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader level={2}>
        {#snippet header()}
          <span>Hvordan sletter jeg kontoen min?</span>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span>Gå til kontoinnstillinger og finn "slett konto".</span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
{/snippet}

<Story name="Default" />

<Story name="With border and branding">
  <Accordion border={true} color="brand1">
    <AccordionItem>
      <AccordionHeader level={1}>
        {#snippet header()}
          <span> Hvor kan jeg logge meg inn på nettsidene deres?</span>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span> Trykk på "logg inn knappen" øverst på siden. </span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader level={2}>
        {#snippet header()}
          <span>Hvordan sletter jeg kontoen min?</span>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span>Gå til kontoinnstillinger og finn "slett konto".</span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Story>

<Story name="Open by default">
  <Accordion border={true} color="brand3">
    <AccordionItem open={writable(true)}>
      <AccordionHeader level={1}>
        {#snippet header()}
          <span slot="header">Lære noe nytt om agurker</span>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span slot="content">Agurker er grønne. </span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem open={writable(true)}>
      <AccordionHeader level={4}>
        {#snippet header()}
          <span slot="header">Lære noe nytt om tomater</span>
        {/snippet}
      </AccordionHeader>
      <AccordionContent>
        {#snippet content()}
          <span slot="content">En tomat er faktisk en frukt.</span>
        {/snippet}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Story>
