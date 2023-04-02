import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputContainer = styled.input`
  background-color: transparent;
  outline: none;
  padding: 12px 24px 16px 32px;
  font-size: 16px;border: 2px solid #000000;
  border-radius: 10px;
  transition: all 0.1s ease-in;
  appearance: none;


  &::placeholder {
    color: #000;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;


export const LabelContainer = styled.label`
  h4 {
    font-size: 20px;
  }
`;
