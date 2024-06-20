<script>
  import { Button } from "$lib";
  import { SvelteComponent, getContext } from "svelte";

  /**
   * The link to be navigated to.
   * @default ''
   * @type {string}
   */
  export let href = "";
  /**
   * Target of the link.
   * @default '_blank'
   * @type {'_blank' | '_self' | '_parent' | '_top'}
   */
  export let target = "_blank";
  /**
   * Icon to be displayed in the dropdown menu item.
   * @default null
   * @type {ConstructorOfATypedSvelteComponent | undefined}
   */
  export let IconComponent = undefined;

  let height = "100%";
  let width = "100%";

  export let onClick = (e) => {};

  let parentProps = getContext("parentProps");
  let size = parentProps?.size || "medium";
</script>

<li>
  <Button
    {href}
    {target}
    {size}
    fullWidth
    variant="tertiary"
    style="justify-content: start;"
    on:click={(e) => {
      e.preventDefault();
      onClick(e);
      if (href) {
        window.open(href, target);
      }
    }}
  >
    {#if IconComponent}
      <div class="icon {size}">
        <svelte:component this={IconComponent} {height} {width} />
      </div>
    {/if}
    <slot />
  </Button>
</li>

<style lang="scss">
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-semantic-surface-action-default, "#00244E");
    height: 1.25rem;
    width: 1.25rem;
  }
  .icon.sm {
    height: var(--fds-sizing-4);
    width: var(--fds-sizing-4);
  }
  .icon.md {
    height: var(--fds-sizing-6);
    width: var(--fds-sizing-6);
  }
  .icon.lg {
    height: var(--fds-sizing-8);
    width: var(--fds-sizing-8);
  }
</style>
