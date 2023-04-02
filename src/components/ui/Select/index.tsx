import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { SelectContainer, LabelContainer, Container } from './styles';

interface SelectProps {
  name: string,
  label: string,
  children: ReactNode
}

export function Select({ name, label, children }: SelectProps) {
  const { register } = useForm();

  return (
    <Container>
      <LabelContainer htmlFor={name}><h4>{label}</h4></LabelContainer>
      <SelectContainer
        id={name}
        {...register(name)}
      >
        {children}
      </SelectContainer>
    </Container>
  );
}
