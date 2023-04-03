import { useForm } from 'react-hook-form';
import { Container, InputContainer, LabelContainer } from './styles';

interface InputProps {
  label: string,
  name?: string,
  type?: 'text' | 'number' | 'date'
  readOnly?: boolean
  value?: string
}

export function Input({ label, name, type, readOnly, value }: InputProps) {
  const { register } = useForm();

  return (
    <Container>
      <LabelContainer htmlFor={name}><h4>{label}</h4></LabelContainer>
      <InputContainer id={name} {...register(name)} type={type || 'text'} readOnly={readOnly || false} value={value || null} />
    </Container>
  );
}
