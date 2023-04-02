import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  padding: 16px 24px;

  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  input {
    width: 360px;
    border: none;
    background-color: transparent;
    height: 100%;
    outline: none;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
    }
  }
`;
