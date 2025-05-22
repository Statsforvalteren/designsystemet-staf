import { create } from '@storybook/theming';

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
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#EFF0EF',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: '#4c76ba',
  barHoverColor: '#f39200',
  barBg: '#434343',

  // Form colors
  // inputBg: '',
  inputBorder: '#6D6D6D',
  inputTextColor: '#ffffff',
  inputBorderRadius: 3,

  brandTitle: 'Komponentbiblioteket',
  brandUrl: '',
  // brandImage: logo,
  // brandTarget: '_blank',
});
