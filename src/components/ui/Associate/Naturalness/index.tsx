import { FieldValues, UseFormRegister } from 'react-hook-form';
import { INaturalidade } from '../../../../types/associate';
import { Title } from '../../Title';
import { Input } from '../../Input';

interface NaturalnessProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: INaturalidade
}

export function Naturalness({ data, readOnly, register }: NaturalnessProps) {
  return (
    <>
      <Title>Naturalidade: </Title>
      <div>

        <Input
          label="Municipio"
          name='municipio'
          readOnly={readOnly}
          defaultValue={data?.municipio || undefined}
          register={register}
        />


        <Input
          label="Estado"
          name='estado'
          readOnly={readOnly}
          defaultValue={data?.estado || undefined}
          register={register}
        />

      </div>
    </>
  );
}
