import { Form } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { associateFormInputs } from '../../types/AssociateFormInputs';
interface AssociateFormProps {
  buttonLabel: string;
  onSubmit: (associate: SubmitHandler<associateFormInputs>) => void;
}

export function AssociateForm({ buttonLabel, onSubmit }: AssociateFormProps) {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register('nome')}
          placeholder="Nome"
        />
      </div>

      <div>
        <Select
          {...register('estadoCivil')}
          placeholder='Estado Civil'
        >
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
        </Select>
      </div>

      <div>
        <Input
          {...register('profissao')}
          placeholder="Profissão"
        />
      </div>

      <div>
        <div>
          <Input
            {...register('nomePai')}
            placeholder="Nome do pai"
          />
        </div>
        <div>
          <Input
            {...register('nomeMae')}
            placeholder="Nome da mãe"
          />
        </div>
      </div>

      <div>
        <div>
          <Input
            {...register('municipio')}
            placeholder="Municipio"
          />
        </div>
        <div>
          <Input
            {...register('estado')}
            placeholder="Estado"
          />
        </div>
      </div>

      <div>
        <Input
          {...register('nacionalidade')}
          placeholder="Nacionalidade"
        />
      </div>

      <div>
        <Input
          {...register('dataNascimento')}
          placeholder="Date do nascimento"
          type="date"
        />
      </div>


      <div>
        <div>
          <Input
            {...register('rua')}
            placeholder="Rua"
          />
        </div>
        <div>
          <Input
            {...register('numero')}
            placeholder="Numero"
            type="number"
          />
        </div>
        <div>
          <Input
            {...register('complemento')}
            placeholder="Complemento"
          />
        </div>
        <div>
          <Input
            {...register('bairro')}
            placeholder="Bairro"
          />
        </div>
        <div>
          <Input
            {...register('cep')}
            placeholder="CEP"
          />
        </div>
      </div>

      <div>
        <Input
          {...register('localTrabalho')}
          placeholder="Local onde trabalha"
        />
      </div>

      <div>
        <div>
          <Input
            {...register('numeroCarteiraTrabalho')}
            placeholder="Numero"
            type="number"
          />
        </div>
        <div>
          <Input
            {...register('serieCarteiraTrabalho')}
            placeholder="Serie"
          />
        </div>
      </div>

      <div>
        <Input
          {...register('sabeLer')}
          placeholder="Sabe ler?"
        />
      </div>

      <div>
        <Input
          {...register('eleitor')}
          placeholder="É eleitor?"
        />
      </div>

      <div>
        <Input
          {...register('carteiraSindical')}
          placeholder="Carteira sindical"
          type='number'
        />
      </div>


      <div>
        <Input
          {...register('cpf')}
          placeholder="CPF"
        />
      </div>

      <div>
        <Input
          {...register('celular')}
          placeholder="Celular"
        />
      </div>

      <div>
        <div>
          <Input
            {...register('nomeEsposa')}
            placeholder="Nome da esposa"
          />
        </div>
        <div>
          <Input
            {...register('filhosMenores')}
            placeholder="Quantidade de filhos menores de 18 anos"
            type="number"
          />
        </div>
        <div>
          <Input
            {...register('filhosHomens')}
            placeholder="Quantidade de filhos do sexo masculino"
            type="number"
          />
        </div>
        <div>
          <Input
            {...register('filhosMulheres')}
            placeholder="Quantidade de filhos do sexo feminino"
            type="number"
          />
        </div>
        <div>
          <Input
            {...register('outrosDependentes')}
            placeholder="Quantidade de outros dependentes"
            type="number"
          />
        </div>
      </div>

      <Button
        type="submit"
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}
