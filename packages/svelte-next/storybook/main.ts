import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  typescript: { check: true },
  stories: [
    '../../svelte-next/**/*.stories.@(ts|tsx|svelte)',
    '../../svelte-next/**/*.@(mdx)',
  ],
  docs: {
    defaultName: 'Dokumentasjon',
  },
  staticDirs: [{ from: './assets', to: 'assets/' }, '../static'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-themes',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      server: {
        fs: {
          allow: ['../'],
        },
      },
      define: {
        'process.env.NODE_DEBUG': false,
      },
    });
  },
};

export default config;
