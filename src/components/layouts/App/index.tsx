import GlobalStyle from '../../../assets/styles/global';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../ui/Navbar';
import { Container } from './styles';

export function App() {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <GlobalStyle />
    </Container>
  );
}
