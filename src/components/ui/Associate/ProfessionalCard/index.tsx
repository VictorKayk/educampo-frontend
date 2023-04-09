import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ICarteiraProfissional } from '../../../../types/associate';
import { Title } from '../../Title';
import { Input } from '../../Input';

interface ProfissionalCardProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: ICarteiraProfissional
}

export function ProfessionalCard({ data, readOnly, register }: ProfissionalCardProps) {
  return (
    <>
      <Title>
        Carteira Profissional:
      </Title>
      <div>

        <Input
          label="Numero"
          name='numeroCarteiraTrabalho'
          register={register}
          type="number"
          readOnly={readOnly}
          defaultValue={data?.numero || undefined}
        />


        <Input
          label="Serie"
          name='serieCarteiraTrabalho'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.serie || undefined}
        />

      </div>
    </>
  );
}
