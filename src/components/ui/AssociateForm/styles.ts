import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & > button {
    width: 100%;
  }
`;
