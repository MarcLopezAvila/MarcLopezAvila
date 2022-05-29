import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #222;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  b, strong {
    font-weight: 500;
  }
`;

export default GlobalStyle;
