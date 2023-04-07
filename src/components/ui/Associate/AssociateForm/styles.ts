import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > button {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
