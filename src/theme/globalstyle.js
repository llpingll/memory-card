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
    font-size: 62.5%;
    line-height: 1.6;
    min-height: 100%;
    /* For footer placement */
    position: relative;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export default Globalstyle;
