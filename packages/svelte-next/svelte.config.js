import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    typescript: {
      // Removing deprecated config from auto-generated tsconfig.json. "verbatimModuleSyntax" is used instead in main tsconfig.json.
      config: (tsconfig) => {
        const {
          // eslint-disable-next-line no-unused-vars
          importsNotUsedAsValues: _,
          // eslint-disable-next-line no-unused-vars
          preserveValueImports: __,
          // keep the rest in a single object
          ...compilerOptions
        } = tsconfig.compilerOptions;

        return {
          ...tsconfig,
          compilerOptions: {
            ...compilerOptions,
          },
        };
      },
    },
  },
};

export default config;
