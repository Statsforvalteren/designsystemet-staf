import '../../theme/brand/theme1.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

import stafThemeLight from './themes/stafThemeLight';
import stafThemeDark from './themes/stafThemeDark';
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

export default preview;
