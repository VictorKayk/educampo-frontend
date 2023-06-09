import { Container, Content } from './styles';
import { AssociateForm } from '../../components/ui/Associate/AssociateForm';
import { useAssociates } from '../../hooks/useAssociates';
import { dateFormat } from '../../utils/dateFormat';
import { associateFormInputs } from '../../types/AssociateFormInputs';
import { toast } from 'react-toastify';
import { SuccessfulToast } from '../../components/ui/SuccessfulToast';

export function NewAssociate() {
  const { createNewAssociate } = useAssociates();
  const { mutate } = createNewAssociate();

  function handleSubmit(data: associateFormInputs) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    mutate({
      carteiraProfissional: {
        numero: Number(data.numeroCarteiraTrabalho),
        serie: data.serieCarteiraTrabalho,
      },
      carteiraSindical: Number(data.carteiraSindical),
      cpf: data.cpf,
      celular: data.celular,
      dataAssociacao: dateFormat(new Date()),
      dataNascimento: data.dataNascimento,
      dependentes: {
        filhosHomens: Number(data.filhosHomens),
        filhosMenores: Number(data.filhosMenores),
        filhosMulheres: Number(data.filhosMulheres),
        outrosDependentes: Number(data.outrosDependentes),
      },
      eleitor: data.eleitor === 'true' ? true : false,
      endereco: {
        bairro: data.bairro,
        complemento: data.complemento,
        cep: data.cep,
        numero: Number(data.numero),
        rua: data.rua,
      },
      estadoCivil: data.estadoCivil,
      filiacao: {
        nomeMae: data.nomeMae,
        nomePai: data.nomePai,
      },
      localTrabalho: data.localTrabalho,
      nacionalidade: data.nacionalidade,
      naturalidade: {
        estado: data.estado,
        municipio: data.municipio,
      },
      fotoAssociado: {
        contentType: 'string',
        nomeArquivo: 'string',
        tamanho: 0
      },
      nome: data.nome,
      profissao: data.profissao,
      rg: data.rg,
      sabeLer: data.sabeLer === 'true' ? true : false
    });

    toast.success('Associado salvo!');
  }

  return (
    <>
      <Container>
        <Content>
          <AssociateForm
            buttonLabel={'Salvar'}
            onSubmit={handleSubmit}
            resetData
          />
        </Content>
      </Container>
      <SuccessfulToast />
    </>
  );
}
