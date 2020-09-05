import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'typeface-roboto';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  *:active, *:focus {
    outline: 0;
  }

  body {
    color: ${theme.colors.baseText};
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    -webkit-overflow-scrolling: touch;
    min-height: 100vh;
    position: relative;
    padding-bottom: 200px;
    background-color: ${theme.colors.alabaster};
  }
  a, .link {
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: none;
    cursor: pointer;
  }
`;
