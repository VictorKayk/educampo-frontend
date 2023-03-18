import { Container, LoaderContainer, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/ui/SearchBar';
import { Button } from '../../components/ui/Button';
import { Table } from '../../components/ui/Table';
import { Loader } from '../../components/ui/Loader';
import { useAssociates } from '../../hooks/useAssociates';
import { Link } from 'react-router-dom';

export function Home() {
  const { getAssociates } = useAssociates();
  const { isLoading, data, error } = getAssociates();

  return (
    <Container>
      <SearchBarButtonContainer>
        <SearchBar />
        <Link to="/new">
          <Button>Novo</Button>
        </Link>
      </SearchBarButtonContainer>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : <Table data={data} />}


    </Container>
  );
}
