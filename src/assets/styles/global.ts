import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body {
    font-size: ${({ theme }) => theme.fonts.size};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.neutral.main};
  }

  button {
    cursor: pointer;
  }
`;
