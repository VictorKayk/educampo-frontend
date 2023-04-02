import GlobalStyle from '../../../assets/styles/global';
import {Outlet} from 'react-router-dom';
import { Header } from '../../ui/Header';

export function App () {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}
