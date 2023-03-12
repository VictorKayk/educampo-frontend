import GlobalStyle from '../../assets/styles/global';
import {Outlet} from 'react-router-dom';

export function App () {
  return (
    <>
      <h1>App</h1>
      <Outlet />
      <GlobalStyle />
    </>
  );
}
