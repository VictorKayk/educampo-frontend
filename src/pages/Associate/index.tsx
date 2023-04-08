import { useParams } from 'react-router-dom';
import { useAssociates } from '../../hooks/useAssociates';
import { Container, LoaderContainer, Content } from './styles';
import { AssociateForm } from '../../components/ui/Associate/AssociateForm';
import { Loader } from '../../components/ui/Loader';

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
          <AssociateForm
            buttonLabel='Editar'
            data={data}
            readOnly
            onSubmit={() => null}
            direction='column'
          />
        </Content>
      )}
    </Container >
  );
}
