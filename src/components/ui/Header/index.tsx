import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header () {
  return (
    <Container>
      <Link to="/">
        <h1><abbr title='Sindicato dos Trabalhadores Rurais de Brumado'>S.T.R.B</abbr></h1>
      </Link>
    </Container>
  );
}
