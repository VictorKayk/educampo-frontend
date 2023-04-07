import { ReactNode, SelectHTMLAttributes } from 'react';
import { SelectContainer, LabelContainer, Container } from './styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  label: string,
  children: ReactNode
  register: UseFormRegister<FieldValues>
  readOnly?: boolean
}

export function Select({ name, label, children, register, readOnly, ...rest }: SelectProps) {

  return (
    <Container>
      <LabelContainer htmlFor={name}><h4>{label}</h4></LabelContainer>
      <SelectContainer
        id={name}
        disabled={readOnly}
        {...rest}
        {...register !== undefined ? { ...register(name) } : undefined}
      >
        {children}
      </SelectContainer>
    </Container>
  );
}
