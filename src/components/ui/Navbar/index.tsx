import { Container, PageIconContainer } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';
import search from '../../../assets/images/icons/search.svg';
import plus from '../../../assets/images/icons/plus.svg';
import calendar from '../../../assets/images/icons/calendar.svg';
import logout from '../../../assets/images/icons/logout.svg';

export function Navbar() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo icon" width='38px' />
        </Link>
      </div>

      <div>
        <PageIconContainer>
          <Link to="/">
            <img src={search} alt="Search icon" width='38px' />
          </Link>
        </PageIconContainer>
        <PageIconContainer>
          <Link to="/">
            <img src={plus} alt="Plus icon" width='38px' />
          </Link>
        </PageIconContainer>
        <PageIconContainer>
          <Link to="/">
            <img src={calendar} alt="Calendar icon" width='38px' />
          </Link>
        </PageIconContainer>
      </div>

      <div>
        <Link to="/">
          <img src={logout} alt="Logout icon" width='38px' />
        </Link>
      </div>
    </Container>
  );
}
