interface IDefaultTheme {
  colors: {
    background: string,
    neutral: {
      main: string;
      light: string;
    },
    primary: {
      main: string;
      dark: string;
    }
  },
  fonts: {
    size: string;
  };
}

const DefaultTheme: IDefaultTheme = {
  colors: {
    background: '#F5F5F5',
    neutral: {
      main: '#22264C',
      light: '#10263C'
    },
    primary: {
      main: '#65E691',
      dark: '#10263C'
    }
  },
  fonts: {
    size: '16px',
  },
};

export default DefaultTheme;
