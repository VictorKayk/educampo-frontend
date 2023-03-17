import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: all 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.neutral.main};
  }
`;
