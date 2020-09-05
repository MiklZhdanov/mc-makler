import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import * as React from 'react';

import theme from '../src/config/theme';
import { GlobalStyle } from '../src/config/globalStyles';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const StoryBookGlobalStyle = createGlobalStyle`
  #root{
    overflow: visible!important;
  }
  body{
    background-color: white!important;
    padding:0!important;;
  }
`;

export const decorators = [
  (Story) => (
    <BrowserRouter>
        <StoryBookGlobalStyle/>
        <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];