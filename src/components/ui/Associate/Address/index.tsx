import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IEndereco } from '../../../../types/associate';
import { Title } from '../../Title';
import { Input } from '../../Input';

interface AddressProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: IEndereco
}

export function Address({ data, readOnly, register }: AddressProps) {
  return (
    <>
      <Title>Endereço: </Title>
      <div>

        <Input
          label='CEP'
          name='cep'
          readOnly={readOnly}
          value={data?.cep || undefined}
          register={register}
        />

        <Input
          label='Bairro'
          name='bairro'
          readOnly={readOnly}
          value={data?.bairro || undefined}
          register={register}
        />

        <Input
          label='Rua'
          name='rua'
          readOnly={readOnly}
          value={data?.rua || undefined}
          register={register}
        />

        <Input
          label='Numero'
          name='numero'
          readOnly={readOnly}
          value={data?.numero || undefined}
          register={register}
        />

        <Input
          label='Complemento'
          name='complemento'
          readOnly={readOnly}
          value={data?.complemento || undefined}
          register={register}
        />
      </div>
    </>
  );
}
