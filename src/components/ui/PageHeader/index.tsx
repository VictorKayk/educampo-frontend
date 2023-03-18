import { Link } from 'react-router-dom';
import { Container } from './styles';
import arrow from '../../../assets/images/icons/arrow.svg';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Return arrow" />
        <span>Voltar</span>
      </Link>
      <h3>{title}</h3>
    </Container>
  );
}
