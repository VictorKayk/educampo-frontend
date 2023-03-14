import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      neutral: {
        main: string;
        light: string;
      }
      primary: {
        main: string;
        dark: string;
      }
    };
    fonts: {
      size: string;
    }
  }
}
