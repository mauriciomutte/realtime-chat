import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ::-moz-focus-inner {border:0;}

  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: 'Roboto', monospace;
    background-color: #EBEFF2;
  }
`;

export default GlobalStyles;