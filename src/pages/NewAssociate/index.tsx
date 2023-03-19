import { Container } from './styles';
import { PageHeader } from '../../components/ui/PageHeader';
import { AssociateForm } from '../../components/ui/AssociateForm';
import { useAssociates } from '../../hooks/useAssociates';

export function NewAssociate() {
  const { createNewAssociate } = useAssociates();
  const { mutate } = createNewAssociate();

  return (
    <Container>
      <PageHeader title="Novo Associado" />
      <AssociateForm
        buttonLabel={'Salvar'}
        onSubmit={(data) => mutate({
          carteiraProfissional: {
            numero: Number(data.numeroCarteiraTrabalho),
            serie: data.serieCarteiraTrabalho,
          },
          carteiraSindical: Number(data.carteiraSindical),
          cpf: data.cpf,
          dataAssociacao: '2023-03-19',
          dataNascimento: data.dataNascimento,
          dependentes: {
            filhosHomens: Number(data.filhosHomens),
            filhosMenores: Number(data.filhosMenores),
            filhosMulheres: Number(data.filhosMulheres),
            outrosDependentes: Number(data.outrosDependentes),
          },
          eleitor: true,
          endereco: {
            bairro: data.bairro,
            complemento: data.complemento,
            cpf: data.cep,
            numero: Number(data.numero),
            rua: data.rua,
          },
          estadoCivil: data.estadoCivil.toUpperCase(),
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
          sabeLer: true
        })}
      />
    </Container>
  );
}
