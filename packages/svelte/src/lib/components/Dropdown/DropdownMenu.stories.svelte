<script context="module">
  import { defineMeta, Template } from '@storybook/addon-svelte-csf';
  import DropdownMenu from './DropdownMenu.svelte';
  import Button from '../Button/Button.svelte';
  import Files from './Files.svelte';
  import Pencil from './Pencil.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/DropdownMenu',
    component: DropdownMenu,
  });
</script>

<script>
  let menuVisible = false;
  let anchorEl = null;
  $: clicked = false;
</script>

<Template let:args>
  <div bind:this={anchorEl} style="height: 300px;">
    <Button
      aria-haspopup="menu"
      aria-expanded={menuVisible}
      on:click={() => {
        menuVisible = true;
      }}
    >
      Åpne dropdown menyen
    </Button>
  </div>
  {#if menuVisible}
    <DropdownMenu
      let:C
      gap={15}
      placement={'right'}
      {anchorEl}
      onClose={() => (menuVisible = false)}
      {...args}
    >
      <C.MenuGroup heading={'Links'}>
        <C.MenuItem onClick={() => (clicked = !clicked)}>
          Test onClick: {clicked ? 'Clicked' : 'Not clicked'}
        </C.MenuItem>
        <C.MenuItem href="https://designsystemet.no" target="_blank">
          External url Designsystemet.no
        </C.MenuItem>
      </C.MenuGroup>
      <C.Divider />
      <C.MenuGroup>
        <C.MenuItem IconComponent={Pencil}>Element with icon</C.MenuItem>
        <C.MenuItem IconComponent={Files}>Element with icon</C.MenuItem>
      </C.MenuGroup>
    </DropdownMenu>
  {/if}
</Template>

<Story name="Default" />

<Story name="With left-placement" args={{ placement: 'left', gap: 0 }} />
