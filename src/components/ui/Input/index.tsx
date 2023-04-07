import { InputHTMLAttributes } from 'react';
import { Container, InputContainer, LabelContainer } from './styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name?: string,
  register?: UseFormRegister<FieldValues>
}

export function Input({ label, name, register, ...rest }: InputProps) {
  return (
    <Container>
      <LabelContainer htmlFor={name}><h4>{label}</h4></LabelContainer>
      <InputContainer
        id={name}
        {...rest}
        {...register !== undefined ? { ...register(name) } : undefined}
      />
    </Container>
  );
}
