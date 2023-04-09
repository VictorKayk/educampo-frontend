import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spline Sans', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    font-size: ${({ theme }) => theme.fonts.size};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.neutral.main};
  }

  button {
    cursor: pointer;
    font-family: 'EB Garamond', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'EB Garamond', serif;
  }

`;
