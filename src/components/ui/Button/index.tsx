import { Container } from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: ReactNode;
}

export function Button({ type, children }: ButtonProps) {
  return (
    <Container type={type || 'button'}>{children}</Container>
  );
}
