import '../../theme/brand/theme1.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import stafThemeLight from './themes/stafThemeLight';
import stafThemeDark from './themes/stafThemeDark';
import docsTheme from './themes/docsTheme';
import './docs-pages/docsPage.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      source: {
        code: null,
      },
      theme: docsTheme,
    },
    backgrounds: {
      default: 'light',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...stafThemeDark },
      light: { ...stafThemeLight },
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Light: 'light',
      Dark: 'dark',
    },
    defaultTheme: 'Light',
    attributeName: 'data-ds-color-mode',
  }),
];

export default preview;
