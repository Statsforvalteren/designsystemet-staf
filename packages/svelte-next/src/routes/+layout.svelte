<script>
  import '@altinn/figma-design-tokens/dist/tokens.css';
  import '../../../theme/brand/theme1.css';
  import '@altinn/figma-design-tokens/dist/tokens.css';
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

{@render children?.()}
