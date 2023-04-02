import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  margin: 48px;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 48px 96px;
  max-width: 656px;
  margin: 0 auto;
`;
