interface IDefaultTheme {
  colors: {
    background: string,
  },
  fonts: {
    size: string;
  };
}

const DefaultTheme: IDefaultTheme = {
  colors: {
    background: '#F5F5F5',
  },
  fonts: {
    size: '16px',
  },
};

export default DefaultTheme;
