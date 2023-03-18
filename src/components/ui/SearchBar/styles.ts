import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 12px 16px;

  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  input {
    flex: 1;
    width: 480px;
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: ${({ theme }) => theme.fonts.size};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neutral.main};
    outline: none;

    &::placeholder {
      font-size: ${({ theme }) => theme.fonts.size};
      font-weight: bold;
    }
  }
`;
