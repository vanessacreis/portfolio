import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${(p) => p.theme.secundary};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.scrollbar};
      border-radius: 5px;
    }
  }

  html,body{
    width: 100%;
    min-height: 100vh;
  }
`;
