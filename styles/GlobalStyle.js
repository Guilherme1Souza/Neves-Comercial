import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .slick-prev {
    left: -40px; 
    z-index: 1;
  }

  .slick-next {
    right: -30px; 
    z-index: 1;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #3b82f6;
    font-size: 30px;
  }


  @media (max-width: 768px) {
    .slick-prev,
    .slick-next,
    .slick-prev::before,
    .slick-next::before {
      display: none !important;
    }
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
