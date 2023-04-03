import styled from 'styled-components';

export const Container = styled.div`
  margin: 48px 32px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 56px;
  background-color: #fff;
  border-radius: 20px;
  padding: 48px 80px 72px 80px;
  margin: 0 auto;
  max-width: 1280px;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  >div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
