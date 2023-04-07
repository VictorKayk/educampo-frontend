import { Container } from './styles';
import search from '../../../assets/images/icons/search.svg';

interface SearchBarProps {
  value: string,
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Container>
      <img src={search} alt="Search" width={38} />
      <input type="text" placeholder="Buscar" value={value} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
}
