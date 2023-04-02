import styled from 'styled-components';

export const Container = styled.button`
  padding: 16px 24px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  font-weight: bold;
  color: #fff;
  font-size: 24px;
`;
