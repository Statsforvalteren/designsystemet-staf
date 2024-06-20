<script>
  import { getContext } from "svelte";
  import { v4 as uuidv4 } from "uuid";
  import { Paragraph } from "$lib";

  /**
   * Text to be displayed in the dropdown menu group.
   */
  export let heading = "";

  let parentProps = getContext("parentProps");
  let size = parentProps?.size || "medium";
  let componentId = uuidv4() + "-dropdown-menu-group";
</script>

<li>
  <ul
    class="ds-dropdownmenu__section"
    {...heading ? { "aria-labelledby": componentId } : {}}
    role="group"
  >
    {#if heading}
      <Paragraph as="div" {size}>
        <h2 class="ds-dropdownmenu__heading" id={componentId}>{heading}</h2>
      </Paragraph>
    {/if}
    <slot />
  </ul>
</li>

<style>
  .ds-dropdownmenu__section {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ds-dropdownmenu__heading {
    padding: var(--ds-spacing-2) var(--ds-spacing-4);
    margin: 0;
  }
</style>
