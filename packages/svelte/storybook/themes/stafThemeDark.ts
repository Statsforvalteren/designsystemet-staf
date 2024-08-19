import { create } from '@storybook/theming';

import logo from '../assets/STAF-nynorsk-hvit.svg';

export default create({
  base: 'dark',

  colorPrimary: '#F39200',
  colorSecondary: '#4c76ba',

  // UI
  appBg: '#2F2F2F',
  appContentBg: '#2F2F2F',
  appBorderColor: '#6D6D6D',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Standard", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#EFF0EF',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: '',
  // barSelectedColor: '',
  barBg: '#434343',

  // Form colors
  // inputBg: '',
  inputBorder: '#6D6D6D',
  inputTextColor: '#ffffff',
  inputBorderRadius: 3,

  brandTitle: 'Statsforvalterens fellestenester',
  brandUrl: 'https://bak.statsforvalteren.no/',
  brandImage: logo,
  brandTarget: '_blank',
});
