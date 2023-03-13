import { Container } from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <Container type="button">{children}</Container>
  );
}
