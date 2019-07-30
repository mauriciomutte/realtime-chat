import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ::-moz-focus-inner {border:0;}

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', monospace;
    background-color: #EBEFF2;
    margin: 0 auto;
    max-width: 700px;
  }
`;

export default GlobalStyles;