import styled from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;

    text-decoration: none;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.neutral.light}
    }
  }

  h3 {
    font-weight: bold;
    font-size: 32px;
  }
`;
