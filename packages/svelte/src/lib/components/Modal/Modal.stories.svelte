<script module>
  import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
  import Button from '../Button/Button.svelte';
  import Modal from './Modal.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Modal',
    component: Modal,
  });
</script>

<script>
  setTemplate(template);
  let isModalOpen = false;
  function closeModal() {
    isModalOpen = false;
  }
</script>

{#snippet template(args)}
  <div style="height: 400px; width: 700px;">
    <Button on:click={() => (isModalOpen = true)} style="margin: 0 auto;">
      Åpne modalen
    </Button>
  </div>
  {#if isModalOpen}
    <Modal onClose={closeModal} {...args}>
      <div slot="header">Modal header</div>
      <div slot="content">
        <p>
          Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien.
          Lorem Ipsum har vært bransjens standard for dummytekst helt siden
          1500-tallet...
        </p>
      </div>
      <div slot="footer" style="display: flex; gap: 0.5rem">
        <Button variant="primary" on:click={closeModal}>Save</Button>
        <Button variant="secondary" on:click={closeModal}>Close</Button>
      </div>
    </Modal>
  {/if}
{/snippet}

<Story name="Default" />

<Story
  name="With subtitle and no close-button"
  args={{ subtitle: 'Some subtitle text...', closeButton: false }}
/>
