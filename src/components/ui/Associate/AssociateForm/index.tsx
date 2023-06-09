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
import { IAssociado } from '../../../../types/associate';

interface AssociateFormProps {
  buttonLabel: string;
  onSubmit: (associate: associateFormInputs) => void;
  resetData?: boolean
  readOnly?: boolean
  data?: IAssociado;
  direction?: 'row' | 'column'
}

export function AssociateForm({ buttonLabel, onSubmit: onSubmitAssociate, resetData, data, direction, readOnly }: AssociateFormProps) {
  const { handleSubmit, register, reset } = useForm();

  function onSubmit(associate: associateFormInputs) {
    onSubmitAssociate(associate);

    if (resetData) reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <div>
          <GroupContainer direction={direction}>
            <PersonalData register={register} readOnly={readOnly} data={data || undefined} />
          </GroupContainer>

          <GroupContainer direction={direction}>
            <ProfessionalCard register={register} readOnly={readOnly} data={data?.carteiraProfissional || undefined} />
          </GroupContainer>

          <GroupContainer direction={direction}>
            <Affiliation register={register} readOnly={readOnly} data={data?.filiacao || undefined} />
          </GroupContainer>

          <GroupContainer direction={direction}>
            <Naturalness register={register} readOnly={readOnly} data={data?.naturalidade || undefined} />
          </GroupContainer>

          <GroupContainer direction={direction}>
            <Address register={register} readOnly={readOnly} data={data?.endereco || undefined} />
          </GroupContainer>

          <GroupContainer direction={direction}>
            <Dependents register={register} readOnly={readOnly} data={data?.dependentes || undefined} />
          </GroupContainer>
        </div>

        <Button type='submit'>
          {buttonLabel}
        </Button>
      </Content>
    </Form>
  );
}
