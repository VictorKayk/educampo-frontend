import { Container, LoaderContainer, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Loader } from '../../components/Loader';
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
