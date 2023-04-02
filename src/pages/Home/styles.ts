import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 48px 32px 72px 32px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const SearchBarButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
