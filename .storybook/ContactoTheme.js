// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#193fc2',
  colorSecondary: '#193fc2',

  // UI
  appBorderColor: '#E6E7EA',

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#060E2B',


  // Form colors
  inputBg: 'white',
  inputBorderRadius: 0,
  brandUrl: 'https://contacto.com',
  brandTitle: `<div style="display: flex; align-items: center"><img src="https://s3.amazonaws.com/plivo_blog_uploads/Contacto+logo.svg"/> <span style="margin-left: 16px">Contacto Storybook</span></div>`
});