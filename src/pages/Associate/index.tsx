import { useParams } from 'react-router-dom';
import { useAssociates } from '../../hooks/useAssociates';
import { PageHeader } from '../../components/ui/PageHeader';
import { Container, LoaderContainer } from './styles';
import { Loader } from '../../components/ui/Loader';

export function Associate() {
  const { id } = useParams<{ id: string }>();
  const { getAssociateById } = useAssociates();
  const { data, isLoading, error } = getAssociateById(id);
  console.log(data);

  return (
    <Container>
      <PageHeader title='Associado' />
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <div>
          <div>
            <h3>Nome: </h3>
            <p>{data.nome}</p>
          </div>
          <div>
            <h3>CPF: </h3>
            <p>{data.cpf}</p>
          </div>
          <div>
            <h3>Carteira Sindical: </h3>
            <p>{data.carteiraSindical}</p>
          </div>
          <div>
            <h3>Data de Nascimento: </h3>
            <p>{data.dataNascimento}</p>
          </div>
          <div>
            <h3>RG: </h3>
            <p>{data.rg}</p>
          </div>
          <div>
            <h3>Filiação: </h3>
            <div>
              <h3>Nome Mae</h3>
              <p>{data.filiacao?.nomeMae}</p>
            </div>
            <div>
              <h3>Nome Pai</h3>
              <p>{data.filiacao?.nomePai}</p>
            </div>
          </div>
          <div>
            <h3>Estado Civil: </h3>
            <p>{data.estadoCivil}</p>
          </div>
          <div>
            <h3>Carteira Profissional: </h3>
            <div>
              <h3>Numero: </h3>
              <p>{data.carteiraProfissional?.numero}</p>
            </div>
            <div>
              <h3>Serie: </h3>
              <p>{data.carteiraProfissional?.serie}</p>
            </div>
          </div>
          <div>
            <h3>eleitor: </h3>
            <p>{data.eleitor}</p>
          </div>
          <div>
            <h3>sabeLer: </h3>
            <p>{data.sabeLer}</p>
          </div>
          <div>
            <h3>localTrabalho: </h3>
            <p>{data.localTrabalho}</p>
          </div>
          <div>
            <h3>nacionalidade: </h3>
            <p>{data.nacionalidade}</p>
          </div>
          <div>
            <h3>Naturalidade: </h3>
            <div>
              <h3>estado</h3>
              <p>{data.naturalidade?.estado}</p>
            </div>
            <div>
              <h3>municipio</h3>
              <p>{data.naturalidade?.municipio}</p>
            </div>
          </div>
          <div>
            <h3>Data associação: </h3>
            <p>{data.dataAssociacao}</p>
          </div>
          <div>
            <h3>Endereço: </h3>
            <div>
              <h3>cpf</h3>
              <p>{data.endereco?.cpf}</p>
            </div>
            <div>
              <h3>bairro</h3>
              <p>{data.endereco?.bairro}</p>
            </div>
            <div>
              <h3>rua</h3>
              <p>{data.endereco?.rua}</p>
            </div>
            <div>
              <h3>numero</h3>
              <p>{data.endereco?.numero}</p>
            </div>
            <div>
              <h3>complemento</h3>
              <p>{data.endereco?.complemento}</p>
            </div>
          </div>
          <div>
            <h3>Dependentes: </h3>
            <div>
              <h3>filhosHomens: </h3>
              <p>{data.dependentes?.filhosHomens}</p>
            </div>
            <div>
              <h3>filhosMulheres: </h3>
              <p>{data.dependentes?.filhosMulheres}</p>
            </div>
            <div>
              <h3>filhosMenores: </h3>
              <p>{data.dependentes?.filhosMenores}</p>
            </div>
            <div>
              <h3>outrosDependentes: </h3>
              <p>{data.dependentes?.outrosDependentes}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
