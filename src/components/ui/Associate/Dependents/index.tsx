import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IDependentes } from '../../../../types/associate';
import { Title } from '../../Title';
import { Input } from '../../Input';

interface DependentsProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: IDependentes
}

export function Dependents({ data, readOnly, register }: DependentsProps) {
  return (
    <>
      <Title>Dependentes: </Title>
      <div>

        <Input
          label='Filhos homens'
          name='filhosHomens'
          readOnly={readOnly}
          defaultValue={data?.filhosHomens || undefined}
          register={register}
        />

        <Input
          label='Filhas mulheres'
          name='filhosMulheres'
          readOnly={readOnly}
          defaultValue={data?.filhosMulheres || undefined}
          register={register}
        />

        <Input
          label='Filhos menores'
          name='filhosMenores'
          readOnly={readOnly}
          defaultValue={data?.filhosMenores || undefined}
          register={register}
        />

        <Input
          label='Outros dependentes'
          name='outrosDependentes'
          readOnly={readOnly}
          defaultValue={data?.outrosDependentes || undefined}
          register={register}
        />
      </div>
    </>
  );
}
