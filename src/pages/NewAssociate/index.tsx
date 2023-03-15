import { Container } from './styles';
import { PageHeader } from '../../components/PageHeader';
import { AssociateForm } from '../../components/AssociateForm';
import { api } from '../../utils/api';
import { associateFormInputs } from '../../types/AssociateFormInputs';

export function NewAssociate() {
  function handleSubmit(data: associateFormInputs) {
    api.post('/associados', data);
    api.post('/carteira', { numero: data.numeroCarteiraTrabalho, serie: data.serieCarteiraTrabalho });
    api.post('/Dependentess', {
      filhosHomens: data.filhosHomens,
      filhosMenores: data.filhosMenores,
      filhosMulheres: data.filhosMulheres,
      outrosDependentes:data.outrosDependentes
    });
    api.post('/Enderecos', {
      bairro: data.bairro,
      complemento: data.complemento,
      cpf: data.cpf,
      numero: data.numero,
      rua: data.rua
    });
    api.post('/Filiacaos', { nomeMae: data.nomeMae, nomePai: data.nomePai });
    api.post('/Naturalidades', { estado: data.estado, municipio: data.municipio });
  }

  return (
    <Container>
      <PageHeader title="Novo Associado" />
      <AssociateForm
        buttonLabel={'Salvar'}
        onSubmit={(data) => handleSubmit(data)}
      />
    </Container>
  );
}
