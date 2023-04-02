import { Container, LoaderContainer, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/ui/SearchBar';
import { Table } from '../../components/ui/Table';
import { Loader } from '../../components/ui/Loader';
import { useAssociates } from '../../hooks/useAssociates';

export function Home() {
  const { getAssociates } = useAssociates();
  const { isLoading, data, isError } = getAssociates();

  return (
    <Container>
      <SearchBarButtonContainer>
        <SearchBar />
      </SearchBarButtonContainer>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : <Table data={data} />}
    </Container>
  );
}
