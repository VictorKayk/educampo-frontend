import { Container, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <SearchBarButtonContainer>
        <SearchBar />
        <Button>Novo</Button>
      </SearchBarButtonContainer>
    </Container>
  );
}
