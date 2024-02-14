import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
    border: 2px solid red;
  }
`;

export default Globalstyle;
