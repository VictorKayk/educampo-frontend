import { Form, Content, GroupContainer } from './styles';
import { Button } from '../../Button';
import { useForm } from 'react-hook-form';
import { associateFormInputs } from '../../../../types/AssociateFormInputs';
import { PersonalData } from '../PersonalData';
import { ProfessionalCard } from '../ProfessionalCard';
import { Affiliation } from '../Affiliation';
import { Naturalness } from '../Naturalness';
import { Address } from '../Address';
import { Dependents } from '../Dependents';

interface AssociateFormProps {
  buttonLabel: string;
  onSubmit: (associate: associateFormInputs) => void;
}

export function AssociateForm({ buttonLabel, onSubmit }: AssociateFormProps) {
  const { handleSubmit, register, reset } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <div>
          <GroupContainer>
            <PersonalData register={register} />
          </GroupContainer>

          <GroupContainer>
            <ProfessionalCard register={register} />
          </GroupContainer>

          <GroupContainer>
            <Affiliation register={register} />
          </GroupContainer>

          <GroupContainer>
            <Naturalness register={register} />
          </GroupContainer>

          <GroupContainer>
            <Address register={register} />
          </GroupContainer>

          <GroupContainer>
            <Dependents register={register} />
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
