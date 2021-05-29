import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {};

theme.palette = {
  primary: '#1976d2',
  secondary: '#c2185b',
  danger: '#d32f2f',
  alert: '#ffa000',
  success: '#388e3c',
  white: '#fff',
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
};

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default function Theme(props) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
