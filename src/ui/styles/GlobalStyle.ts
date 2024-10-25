import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Adicione estas novas regras */
  html, body {
    width: 100%;
    overflow-x: hidden; /* Evita a rolagem horizontal */
  }

  /* Garante que cada elemento principal respeite a largura da tela */
  section, div, img, footer {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

