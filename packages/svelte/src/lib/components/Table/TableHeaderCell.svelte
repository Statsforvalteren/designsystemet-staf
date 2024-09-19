<script>
  /**
   * @type {'ascending' | 'descending' | 'none' | 'other' | undefined}
   */
  export let sort = undefined;

  export let onClick = () => {};
</script>

<th {...sort ? { 'aria-sort': sort } : {}}>
  {#if sort}
    <button type="button" class="ds-focus" on:click={onClick}>
      <slot />
    </button>
  {:else}
    <slot />
  {/if}
</th>

<!-- 
<style>
  /**
 * Apply a focus outline on an element when it is focused with keyboard
 */
  .ds-focus:focus-visible {
    outline: none;
    box-shadow: var(--dsc-focus-boxShadow);
  }

  th {
    border-bottom: 1px solid var(--ds-color-neutral-border-subtle);
    padding: var(--ds-spacing-2) var(--ds-spacing-3);
    text-align: inherit;
    font-weight: 500;
    background: var(--ds-color-neutral-background-default);
    cursor: pointer;
    padding: 0;

    & > button {
      background: none;
      border: 0;
      box-sizing: border-box;
      color: inherit;
      cursor: pointer;
      display: block;
      font: inherit;
      padding: var(--ds-spacing-2) var(--ds-spacing-3);
      text-align: inherit;
      width: 100%;

      &:focus-visible {
        position: relative; /* Place on top when painting focus border */
      }

      &::after {
        background: currentcolor;
        content: '';
        display: inline-block;
        height: var(--ds-spacing-6);
        mask: center/contain no-repeat
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12.53 4.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06L12 6.06l2.97 2.97a.75.75 0 1 0 1.06-1.06zm-3.5 10.5a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L12 17.94z'/%3E%3C/svg%3E");
        vertical-align: middle;
        width: var(--ds-spacing-6);
      }
    }

    &[aria-sort='ascending'] > button::after {
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z'/%3E%3C/svg%3E");
    }

    &[aria-sort='descending'] > button::after {
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06'/%3E%3C/svg%3E");
    }

    &:not([aria-sort='none']) > button {
      background: var(--ds-color-neutral-background-subtle);
    }

    /**
    * States
    */
    @media (hover: hover) and (pointer: fine) {
      &[data-hover] {
        background: var(--ds-color-neutral-surface-default);
      }

      & > :hover {
        background: var(--ds-color-neutral-surface-default);
      }
    }
  }
</style> -->

<style>
</style>
