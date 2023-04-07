import { useParams } from 'react-router-dom';
import { useAssociates } from '../../hooks/useAssociates';
import { Container, LoaderContainer, Content, GroupContainer } from './styles';
import { Loader } from '../../components/ui/Loader';
import { PersonalData } from '../../components/ui/Associate/PersonalData';
import { ProfessionalCard } from '../../components/ui/Associate/ProfessionalCard';
import { Affiliation } from '../../components/ui/Associate/Affiliation';
import { Naturalness } from '../../components/ui/Associate/Naturalness';
import { Address } from '../../components/ui/Associate/Address';
import { Dependents } from '../../components/ui/Associate/Dependents';

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
            <PersonalData readOnly data={data} />
          </GroupContainer>

          <GroupContainer>
            <ProfessionalCard readOnly data={data.carteiraProfissional} />
          </GroupContainer>

          <GroupContainer>
            <Affiliation readOnly data={data.filiacao} />
          </GroupContainer>

          <GroupContainer>
            <Naturalness readOnly data={data.naturalidade} />
          </GroupContainer>

          <GroupContainer>
            <Address readOnly data={data.endereco} />
          </GroupContainer>

          <GroupContainer>
            <Dependents readOnly data={data.dependentes} />
          </GroupContainer>
        </Content>
      )}
    </Container >
  );
}
