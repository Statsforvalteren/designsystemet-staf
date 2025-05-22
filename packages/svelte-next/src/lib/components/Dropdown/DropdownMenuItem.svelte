<script>
  import { Button } from '../../index.js';
  import { getContext } from 'svelte';

  
  
  

  let height = '100%';
  let width = '100%';

  /** @type {{href?: string, target?: '_blank' | '_self' | '_parent' | '_top', IconComponent?: ConstructorOfATypedSvelteComponent | undefined, onClick?: any, children?: import('svelte').Snippet}} */
  let {
    href = '',
    target = '_blank',
    IconComponent = undefined,
    onClick = (e) => {},
    children
  } = $props();

  let parentProps = getContext('parentProps');
  let size = parentProps?.size || 'medium';
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
    {@render children?.()}
  </Button>
</li>

<style lang="scss">
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-semantic-surface-action-default, '#00244E');
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
