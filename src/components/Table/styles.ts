import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeadContainer = styled.thead`
  text-align: center;

  th {
    padding: 24px 32px;
    color: ${({ theme }) => theme.colors.neutral.light};
    text-transform: capitalize;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.light};
  }

  th + th {
    border-left: 1px solid ${({ theme }) => theme.colors.neutral.light};
  }
`;

export const TableBodyContainer = styled.tbody`
  text-align: center;

  td {
    padding: 24px 12px;
    color: ${({ theme }) => theme.colors.neutral.light};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.light};
  }

  td + td {
    border-left: 1px solid ${({ theme }) => theme.colors.neutral.light};
  }

  td:last-child {
    padding-bottom: 32px;
  }
`;
