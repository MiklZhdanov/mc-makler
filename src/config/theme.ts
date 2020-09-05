import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme: { [key: string]: any } = {
  breakpoints: [768, 1440],
  breakpointsMixin: {
    tablet: '768px',
    desktop: '1440px'
  },
  colors: {
    black: '#000000',
    alto: '#D0D0D0',
    green: '#27ae60',

    baseText: '#4A4A4A',
    white: '#FFFFFF',
    alabaster: '#f8f8f8',
    mercury: '#E6E6E6',
    gallery: '#EFEFEF',
    silverChalice: '#9D9D9D',
    selectiveYellow: '#FEB902'
  }
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
