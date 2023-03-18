import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 32px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const SearchBarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
