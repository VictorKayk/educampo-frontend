import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: {
        main: string;
      },
      neutral: {
        main: string;
        light: string;
      }
    };
    fonts: {
      size: string;
    }
  }
}
