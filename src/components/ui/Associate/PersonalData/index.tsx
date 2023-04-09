import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Input } from '../../Input';
import { Select } from '../../Select';
import { Title } from '../../Title';
import { IDadosPessoais } from '../../../../types/associate';

interface PersonalDataProps {
  register?: UseFormRegister<FieldValues>
  readOnly?: boolean
  data?: IDadosPessoais
}

export function PersonalData({ register, readOnly, data }: PersonalDataProps) {

  return (
    <>
      <Title>
        Dados Pessoais:
      </Title>
      <div>

        <Input
          label='Nome'
          name='nome'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.nome || undefined}
        />

        <Input
          label="CPF"
          name='cpf'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.cpf || undefined}
        />

        <Input
          label="RG"
          name='rg'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.rg || undefined}
        />

        <Input
          label="Carteira sindical"
          name='carteiraSindical'
          register={register}
          type='number'
          readOnly={readOnly}
          defaultValue={data?.carteiraSindical || undefined}
        />

        <Input
          label="Celular"
          name='celular'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.celular || undefined}
        />

        <Input
          label="Data do nascimento"
          name='dataNascimento'
          register={register}
          type="date"
          readOnly={readOnly}
          defaultValue={data?.dataNascimento || undefined}
        />

        <Select
          name='estadoCivil'
          register={register}
          label='Estado Civil'
          readOnly={readOnly}
          defaultValue={data?.estadoCivil || undefined}
        >
          <option value="SOLTEIRO">Solteiro</option>
          <option value="CASADO">Casado</option>
          <option value="DIVORCIADO">Divorciado</option>
          <option value="VIUVO">Viúvo</option>
        </Select>

        <Input
          label="Nacionalidade"
          name='nacionalidade'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.nacionalidade || undefined}
        />

        <Input
          label="Profissão"
          name='profissao'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.profissao || undefined}
        />

        <Input
          label="Local onde trabalha"
          name='localTrabalho'
          register={register}
          readOnly={readOnly}
          defaultValue={data?.localTrabalho || undefined}
        />

        <Select
          name='sabeLer'
          register={register}
          label='Sabe ler?'
          readOnly={readOnly}
          defaultValue={data?.sabeLer !== undefined ? data?.sabeLer === false ? 'false' : 'true' : undefined}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </Select>

        <Select
          name='eleitor'
          register={register}
          label='É eleitor?'
          readOnly={readOnly}
          defaultValue={data?.eleitor !== undefined ? data?.eleitor === false ? 'false' : 'true' : undefined}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </Select>

      </div>
    </>
  );
}
