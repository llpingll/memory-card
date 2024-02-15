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
    /* font-size: 62.5%; */
    min-height: 100%;
    position: relative;
  }

  body {
    font-family: "Nunito", sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    border: 2px solid red;
    }
`;

export default Globalstyle;
