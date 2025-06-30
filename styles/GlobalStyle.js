import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff;
    color: #222;
    line-height: 1.5;
    overflow-y: scroll;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input, button, textarea, select {
    font-family: inherit;
    font-size: 100%;
  }
`;

export default GlobalStyle;
