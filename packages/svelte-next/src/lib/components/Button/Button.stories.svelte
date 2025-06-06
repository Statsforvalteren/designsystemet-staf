<script>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({
    title: 'Komponenter/Button',
    component: Button,
  });

  let count = $state(0);
  function handleClick() {
    count += 1;
  }
</script>

<Story name="Default">
  <Button onclick={handleClick}>
    {#snippet dropdownButtonContent()}You clicked: {count}{/snippet}
  </Button>
</Story>

<Story name="With color and size">
  <Button color="danger" size="lg">
    {#snippet dropdownButtonContent()}Dangerously colored{/snippet}
  </Button>
</Story>

<Story name="With icon and outline">
  <Button iconPlacement="left" variant="secondary">
    {#snippet dropdownButtonContent()}Accept{/snippet}
    {#snippet icon()}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        fill="none"
        viewBox="0 0 24 24"
        focusable="false"
        role="img"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m4.573 7.234a.75.75 0 1 0-1.146-.968l-4.973 5.877L8.03 11.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.102-.046z"
          clip-rule="evenodd"
        />
      </svg>
    {/snippet}
  </Button>
</Story>

<Story name="Ghost button">
  <Button variant="tertiary" size="lg">
    {#snippet dropdownButtonContent()}Hover me{/snippet}
  </Button>
</Story>

<Story name="Click events">
  <Button onclick={() => alert('Button clicked!')}>
    {#snippet dropdownButtonContent()}Click me{/snippet}
  </Button>
</Story>
