import { Container, LoaderContainer, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/ui/SearchBar';
import { Table } from '../../components/ui/Table';
import { Loader } from '../../components/ui/Loader';
import { useAssociates } from '../../hooks/useAssociates';
import useDebounce from '../../hooks/useDebounce';
import { useState } from 'react';

export function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const debounceValue = useDebounce(searchText, 750);

  const { getAssociatesOrAssociateByName } = useAssociates();

  function handleSearchChange(value: string) {
    setSearchText(value);
  }

  const { isLoading, data, isError } = getAssociatesOrAssociateByName(debounceValue);

  return (
    <Container>
      <SearchBarButtonContainer>
        <SearchBar value={searchText} onChange={handleSearchChange} />
      </SearchBarButtonContainer>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : <Table data={data} />}
    </Container>
  );
}
