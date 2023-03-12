import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
    };
    fonts: {
      size: string;
    }
  }
}
