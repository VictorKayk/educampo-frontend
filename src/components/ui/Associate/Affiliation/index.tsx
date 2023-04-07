import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IFiliacao } from '../../../../types/associate';
import { Title } from '../../Title';
import { Input } from '../../Input';

interface AffiliationProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: IFiliacao
}

export function Affiliation({ data, readOnly, register }: AffiliationProps) {
  return (
    <>
      <Title>Filiação: </Title>
      <div>

        <Input
          label='Nome da mãe'
          name='nomeMae'
          readOnly={readOnly}
          value={data?.nomeMae || undefined}
          register={register}
        />


        <Input
          label='Nome do pai'
          name='nomePai'
          readOnly={readOnly}
          value={data?.nomePai || undefined}
          register={register}
        />

      </div>
    </>
  );
}
