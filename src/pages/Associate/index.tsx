import { useParams } from 'react-router-dom';
import { useAssociates } from '../../hooks/useAssociates';
import { Container, LoaderContainer, Content, GroupContainer, InputGroupContainer } from './styles';
import { Loader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Title } from '../../components/ui/Title';

export function Associate() {
  const { id } = useParams<{ id: string }>();
  const { getAssociateById } = useAssociates();
  const { data, isLoading, isError } = getAssociateById(id);

  return (
    <Container>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Content>

          <GroupContainer>
            <Title>Dados Pessoais</Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='Nome'
                  name='nome'
                  readOnly
                  value={data.nome}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='CPF'
                  name='cpf'
                  readOnly
                  value={data.cpf}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='RG'
                  name='rg'
                  readOnly
                  value={data.rg}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Celular'
                  name='celular'
                  readOnly
                  value={data.celular}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Carteira Sindical'
                  name='carteiraSindical'
                  readOnly
                  value={data.carteiraSindical.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Data de Nascimento'
                  name='dataNascimento'
                  readOnly
                  value={data.dataNascimento}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Estado Civil'
                  name='estadoCivil'
                  readOnly
                  value={data.estadoCivil}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Data associação'
                  name='dataAssociação'
                  readOnly
                  value={data.dataAssociacao}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Nacionalidade'
                  name='nacionalidade'
                  readOnly
                  value={data.nacionalidade}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Profissão'
                  name='profissão'
                  readOnly
                  value={data.profissao}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Local de trabalho'
                  name='localTrabalho'
                  readOnly
                  value={data.localTrabalho}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Sabe ler'
                  name='sabeLer'
                  readOnly
                  value={data.sabeLer === true ? 'Sim' : 'Não'}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='É eleitor'
                  name='eleitor'
                  readOnly
                  value={data.eleitor === true ? 'Sim' : 'Não'}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>


          <GroupContainer>
            <Title>Carteira Profissional: </Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='Numero'
                  name='numero'
                  readOnly
                  value={data.carteiraProfissional?.numero.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Serie'
                  name='serie'
                  readOnly
                  value={data.carteiraProfissional?.serie}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>

          <GroupContainer>
            <Title>Filiação: </Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='Nome da mãe'
                  name='nomeMae'
                  readOnly
                  value={data.filiacao?.nomeMae}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Nome do pai'
                  name='nomePai'
                  readOnly
                  value={data.filiacao?.nomePai}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>


          <GroupContainer>
            <Title>Naturalidade: </Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='Estado'
                  name='estado'
                  readOnly
                  value={data.naturalidade?.estado}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Municipio'
                  name='municipio'
                  readOnly
                  value={data.naturalidade?.municipio}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>


          <GroupContainer>
            <Title>Endereço: </Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='CEP'
                  name='cep'
                  readOnly
                  value={data.endereco?.cep}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Bairro'
                  name='bairro'
                  readOnly
                  value={data.endereco?.bairro}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Rua'
                  name='rua'
                  readOnly
                  value={data.endereco?.rua}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Numero'
                  name='numero'
                  readOnly
                  value={data.endereco?.numero.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Complemento'
                  name='complemento'
                  readOnly
                  value={data.endereco?.complemento}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>


          <GroupContainer>
            <Title>Dependentes: </Title>
            <div>
              <InputGroupContainer>
                <Input
                  label='Filhos homens'
                  name='filhosHomens'
                  readOnly
                  value={data.dependentes?.filhosHomens.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Filhos mulheres'
                  name='filhosMulheres'
                  readOnly
                  value={data.dependentes?.filhosMulheres.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Filhos menores'
                  name='filhosMenores'
                  readOnly
                  value={data.dependentes?.filhosMenores.toString()}
                />
              </InputGroupContainer>
              <InputGroupContainer>
                <Input
                  label='Outros dependentes'
                  name='outrosDependentes'
                  readOnly
                  value={data.dependentes?.outrosDependentes.toString()}
                />
              </InputGroupContainer>
            </div>
          </GroupContainer>
        </Content>
      )
      }
    </Container >
  );
}
