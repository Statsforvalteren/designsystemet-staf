<script>
  import { ParagraphWrapper } from '../../index.js';

  /**
   * Controls the size of the table.
   * @type {'sm' | 'md' | 'lg'}
   */
  export let size = 'md';

  /**
   * If true, the table will have zebra striping.
   * @type {boolean}
   */
  export let zebra = false;

  /**
   * If true, the table will have a sticky header.
   * @type {boolean}
   */
  export let stickyHeader = false;

  /**
   * If true, the table will have a rounded border.
   * @type {boolean}
   */
  export let border = false;

  /**
   * If true, the table will have a hover effect on rows.
   * @type {boolean}
   */
  export let hover = false;
</script>

<ParagraphWrapper {size}>
  <table
    class="ds-table"
    data-border={border || undefined}
    data-hover={hover || undefined}
    data-size={size}
    data-sticky-header={stickyHeader || undefined}
    data-zebra={zebra || undefined}
    {...$$restProps}
  >
    <thead>
      <slot name="headerRow" />
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</ParagraphWrapper>

<style>
  .ds-table {
    --dsc-table-background--hover: var(--ds-color-neutral-surface-default);
    --dsc-table-background--zebra: var(--ds-color-neutral-background-subtle);
    --dsc-table-background: var(--ds-color-neutral-background-default);
    --dsc-table-border-radius: 0;
    --dsc-table-border: 1px solid var(--ds-color-neutral-border-subtle);
    --dsc-table-color: var(--ds-color-neutral-text-default);
    --dsc-table-header-background--hover: var(
      --ds-color-neutral-surface-default
    );
    --dsc-table-header-background--sorted: var(
      --ds-color-neutral-background-subtle
    );
    --dsc-table-header-background: var(--ds-color-neutral-background-default);
    --dsc-table-header-divider: 2px solid var(--ds-color-neutral-border-subtle);
    --dsc-table-padding: var(--ds-spacing-2) var(--ds-spacing-3);
    --dsc-table-sort-size: var(--ds-spacing-6);

    border-collapse: separate; /* Using separate mode to enable border-radius */
    border-radius: var(--dsc-table-border-radius);
    border-spacing: 0;
    color: var(--dsc-table-color);
    width: 100%;

    :global(& > :is(tbody, thead) > tr > :is(th, td)) {
      background: var(--dsc-table-background);
      border-bottom: var(--dsc-table-border);
      padding: var(--dsc-table-padding);
      text-align: inherit;

      :global(&:is(th)) {
        font-weight: 500;
      }
    }

    :global(& > thead > tr > :is(th, td)) {
      background: var(--dsc-table-header-background);
    }

    :global(& > thead > tr:last-child > :is(th, td)) {
      border-bottom: var(--dsc-table-header-divider);
    }

    /* Add rounded border to first and last row */
    :global(& > :is(thead, tbody):first-child > tr:first-child > :is(th, td)) {
      :global(&:first-child) {
        border-top-left-radius: var(--dsc-table-border-radius);
      }

      :global(&:last-child) {
        border-top-right-radius: var(--dsc-table-border-radius);
      }
    }

    /* Add rounded border to last row */
    :global(& > :is(thead, tbody):last-child > tr:last-child > :is(th, td)) {
      :global(&:first-child) {
        border-bottom-left-radius: var(--dsc-table-border-radius);
      }

      :global(&:last-child) {
        border-bottom-right-radius: var(--dsc-table-border-radius);
      }
    }

    /**
    * Sorting
    */
    :global(& > thead > tr > [aria-sort]) {
      cursor: pointer;
      padding: 0;

      :global(& > button) {
        background: none;
        border: 0;
        box-sizing: border-box;
        color: inherit;
        cursor: pointer;
        display: block;
        font: inherit;
        padding: var(--dsc-table-padding);
        text-align: inherit;
        width: 100%;

        :global(&:focus-visible) {
          position: relative; /* Place on top when painting focus border */
        }

        :global(&::after) {
          background: currentcolor;
          content: '';
          display: inline-block;
          height: var(--dsc-table-sort-size);
          mask: center/contain no-repeat
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12.53 4.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06L12 6.06l2.97 2.97a.75.75 0 1 0 1.06-1.06zm-3.5 10.5a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L12 17.94z'/%3E%3C/svg%3E");
          vertical-align: middle;
          width: var(--dsc-table-sort-size);
        }
      }

      :global(&[aria-sort='ascending'] > button::after) {
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z'/%3E%3C/svg%3E");
      }

      :global(&[aria-sort='descending'] > button::after) {
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06'/%3E%3C/svg%3E");
      }

      :global(&:not([aria-sort='none']) > button) {
        background: var(--dsc-table-header-background--sorted);
      }
    }

    /**
    * Sizes
    */
    &[data-size='sm'] {
      --dsc-table-padding: var(--ds-spacing-1) var(--ds-spacing-3);
    }

    &[data-size='lg'] {
      --dsc-table-padding: var(--ds-spacing-3) var(--ds-spacing-3);
    }

    /**
    * Configurations
    */
    &[data-border] {
      --dsc-table-border-radius: min(1rem, var(--ds-border-radius-md));

      border: var(--dsc-table-border);

      :global(& > :is(thead, tbody):last-child > tr:last-child > :is(th, td)) {
        border-bottom: 0;
      }
    }

    &[data-sticky-header] {
      position: relative;
      overflow: auto;

      :global(& > thead > tr > :is(th, td)) {
        position: sticky;
        top: 0;
      }
    }

    :global(
        &[data-zebra] > :is(thead, tbody) > tr:nth-child(even) > :is(th, td)
      ) {
      background: var(--dsc-table-background--zebra);
    }

    /**
    * States
    */
    @media (hover: hover) and (pointer: fine) {
      :global(&[data-hover] > tbody > tr:hover > :is(th, td)) {
        background: var(--dsc-table-background--hover);
      }

      :global(& > thead > tr > [aria-sort]:hover) {
        background: var(--dsc-table-header-background--hover);
      }
    }
  }
</style>
