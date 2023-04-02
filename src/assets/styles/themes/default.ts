interface IDefaultTheme {
  colors: {
    background: string,
    neutral: {
      main: string;
      light: string;
    },
    primary: {
      main: string;
    }
  },
  fonts: {
    size: string;
  };
}

const DefaultTheme: IDefaultTheme = {
  colors: {
    background: '#CBEBDD',
    neutral: {
      main: '#22264C',
      light: '#10263C'
    },
    primary: {
      main: '#00CC66',
    }
  },
  fonts: {
    size: '16px',
  },
};

export default DefaultTheme;
