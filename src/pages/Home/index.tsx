import { Container, SearchBarButtonContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Associado } from '../../types/associative';
import { api } from '../../utils/api';

export function Home() {
  const [associados, setAssociados] = useState<Associado[] | []>([]);

  useEffect(() => {
    api.get('/associados').then(response => {
      setAssociados(response.data);
    });
  }, []);

  return (
    <Container>
      <SearchBarButtonContainer>
        <SearchBar />
        <Link to="/new">
          <Button>Novo</Button>
        </Link>
      </SearchBarButtonContainer>
      <Table data={associados} />
    </Container>
  );
}
