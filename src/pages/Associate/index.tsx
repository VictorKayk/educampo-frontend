import { useParams } from 'react-router-dom';
import { useAssociates } from '../../hooks/useAssociates';
import { Container, LoaderContainer, Content } from './styles';
import { AssociateForm } from '../../components/ui/Associate/AssociateForm';
import { Loader } from '../../components/ui/Loader';
import { dateFormat } from '../../utils/dateFormat';
import { associateFormInputs } from '../../types/AssociateFormInputs';
import { useState } from 'react';

export function Associate() {
  const { id } = useParams<{ id: string }>();
  const { getAssociateById, updateAssociate } = useAssociates();
  const { data, isLoading, isError } = getAssociateById(id);
  const { mutate } = updateAssociate(id);
  const [readOnly, setReadOnly] = useState<boolean>(true);

  function handleSubmit(associateFormInput: associateFormInputs) {
    if (readOnly) return setReadOnly(false);

    mutate({
      id: +id,
      carteiraProfissional: {
        numero: Number(associateFormInput.numeroCarteiraTrabalho),
        serie: associateFormInput.serieCarteiraTrabalho,
        id: data.carteiraProfissional.id,
      },
      carteiraSindical: Number(associateFormInput.carteiraSindical),
      cpf: associateFormInput.cpf,
      celular: associateFormInput.celular,
      dataAssociacao: dateFormat(new Date()),
      dataNascimento: associateFormInput.dataNascimento,
      dependentes: {
        filhosHomens: Number(associateFormInput.filhosHomens),
        filhosMenores: Number(associateFormInput.filhosMenores),
        filhosMulheres: Number(associateFormInput.filhosMulheres),
        outrosDependentes: Number(associateFormInput.outrosDependentes),
        id: data.dependentes.id,
      },
      eleitor: associateFormInput.eleitor === 'true' ? true : false,
      endereco: {
        bairro: associateFormInput.bairro,
        complemento: associateFormInput.complemento,
        cep: associateFormInput.cep,
        numero: Number(associateFormInput.numero),
        rua: associateFormInput.rua,
        id: data.endereco.id,
      },
      estadoCivil: associateFormInput.estadoCivil,
      filiacao: {
        nomeMae: associateFormInput.nomeMae,
        nomePai: associateFormInput.nomePai,
        id: data.filiacao.id,
      },
      localTrabalho: associateFormInput.localTrabalho,
      nacionalidade: associateFormInput.nacionalidade,
      naturalidade: {
        estado: associateFormInput.estado,
        municipio: associateFormInput.municipio,
        id: data.naturalidade.id,
      },
      fotoAssociado: {
        contentType: 'string',
        nomeArquivo: 'string',
        tamanho: 0,
        id: data.fotoAssociado.id,
      },
      nome: associateFormInput.nome,
      profissao: associateFormInput.profissao,
      rg: associateFormInput.rg,
      sabeLer: associateFormInput.sabeLer === 'true' ? true : false
    });

    setReadOnly(true);
  }

  return (
    <Container>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Content>
          <AssociateForm
            buttonLabel={readOnly ? 'Editar' : 'Salvar'}
            data={data}
            readOnly={readOnly}
            onSubmit={handleSubmit}
            direction='column'
          />
        </Content>
      )}
    </Container >
  );
}
