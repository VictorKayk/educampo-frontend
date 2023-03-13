import { Container } from './styles';
import search from '../../assets/images/search.svg';

export function SearchBar() {
  return (
    <Container>
      <img src={search} alt="Search" />
      <input type="text" placeholder="Buscar" />
    </Container>
  );
}
