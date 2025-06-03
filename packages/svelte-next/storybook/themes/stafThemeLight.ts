import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#4c76ba',
  colorSecondary: '#00244e',

  // UI
  appBg: '#edf1f8',
  appContentBg: '#edf1f8',
  appBorderColor: '#e2e2e2',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#00244e',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: '#4c76ba',
  barHoverColor: '#f39200',
  barBg: '#ffffff',

  // Form colors
  // inputBg: '',
  inputBorder: '#4c76ba',
  inputTextColor: '#00244e',
  inputBorderRadius: 3,

  brandTitle: 'Komponentbiblioteket',
  brandUrl: '',
  // brandImage: logo,
  // brandTarget: '_blank',
});
