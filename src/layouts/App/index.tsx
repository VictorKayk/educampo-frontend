import GlobalStyle from '../../styles/global';
import {Outlet} from 'react-router-dom';
import { Header } from '../../components/Header';

export function App () {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}
