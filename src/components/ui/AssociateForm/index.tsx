import { Form, Content, GroupContainer, InputContainer, InputGroupContainer } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { useForm } from 'react-hook-form';
import { associateFormInputs } from '../../../types/AssociateFormInputs';
import { Title } from '../Title';
interface AssociateFormProps {
  buttonLabel: string;
  onSubmit: (associate: associateFormInputs) => void;
}

export function AssociateForm({ buttonLabel, onSubmit }: AssociateFormProps) {
  const { handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <div>
          <GroupContainer>
            <Title>
              Dados Pessoais
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label='Nome'
                  name='nome'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="CPF"
                  name='cpf'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="RG"
                  name='rg'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="Carteira sindical"
                  name='carteiraSindical'
                  type='number'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="Celular"
                  name='celular'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="Data do nascimento"
                  name='dataNascimento'
                  type="date"
                />
              </InputContainer>

              <InputContainer>
                <Select
                  name='estadoCivil'
                  label='Estado Civil'
                >
                  <option value="SOLTEIRO">Solteiro</option>
                  <option value="CASADO">Casado</option>
                  <option value="DIVORCIADO">Divorciado</option>
                  <option value="VIUVO">Viúvo</option>
                </Select>
              </InputContainer>

              <InputContainer>
                <Input
                  label="Nacionalidade"
                  name='nacionalidade'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="Profissão"
                  name='profissao'
                />
              </InputContainer>

              <InputContainer>
                <Input
                  label="Local onde trabalha"
                  name='localTrabalho'
                />
              </InputContainer>

              <InputContainer>
                <Select
                  name='sabeLer'
                  label='Sabe ler?'
                >
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </Select>
              </InputContainer>

              <InputContainer>
                <Select
                  name='eleitor'
                  label='É eleitor?'
                >
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </Select>
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>

          <GroupContainer>
            <Title>
              Carteira de trabalho
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label="Numero"
                  name='numeroCarteiraTrabalho'
                  type="number"
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Serie"
                  name='serieCarteiraTrabalho'
                />
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>

          <GroupContainer>
            <Title>
              Filiação
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label="Nome do pai"
                  name='nomePai'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Nome da mãe"
                  name='nomeMae'
                />
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>

          <GroupContainer>
            <Title>
              Naturalidade
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label="Municipio"
                  name='municipio'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Estado"
                  name='estado'
                />
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>


          <GroupContainer>
            <Title>
              Endereço
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label="Rua"
                  name='rua'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Numero"
                  name='numero'
                  type="number"
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Complemento"
                  name='complemento'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Bairro"
                  name='bairro'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="CEP"
                  name='cep'
                />
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>


          <GroupContainer>
            <Title>
              Dependentes
            </Title>
            <InputGroupContainer>
              <InputContainer>
                <Input
                  label="Nome da esposa"
                  name='nomeEsposa'
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Quantidade de filhos menores de 18 anos"
                  name='filhosMenores'
                  type="number"
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Quantidade de filhos do sexo masculino"
                  name='filhosHomens'
                  type="number"
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Quantidade de filhos do sexo feminino"
                  name='filhosMulheres'
                  type="number"
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Quantidade de outros dependentes"
                  name='outrosDependentes'
                  type="number"
                />
              </InputContainer>
            </InputGroupContainer>
          </GroupContainer>
        </div>

        <Button
          type="submit"
        >
          {buttonLabel}
        </Button>
      </Content>
    </Form>
  );
}
