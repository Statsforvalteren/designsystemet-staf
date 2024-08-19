import { create } from '@storybook/theming';

import logo from '../assets/STAF-nynorsk-svart.svg';

export default create({
  base: 'light',

  colorPrimary: '#4c76ba',
  colorSecondary: '#00244e',

  // UI
  appBg: '#DFE0DF',
  appContentBg: '#DFE0DF',
  appBorderColor: '#BFC2C0',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#00244e',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: '',
  // barSelectedColor: '',
  barBg: '#EFF0EF',

  // Form colors
  // inputBg: '',
  inputBorder: '#BFC2C0',
  inputTextColor: '#00244e',
  inputBorderRadius: 3,

  brandTitle: 'Statsforvalterens fellestenester',
  brandUrl: 'https://bak.statsforvalteren.no/',
  brandImage: logo,
  brandTarget: '_blank',
});
