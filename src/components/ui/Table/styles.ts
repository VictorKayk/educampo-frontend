import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-spacing: 0;
`;

export const TableHeadContainer = styled.thead`
  text-align: center;

  th,
  td {
    padding: 24px 32px;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.light};
    border-right: 1px solid ${({ theme }) => theme.colors.neutral.light};
    color: ${({ theme }) => theme.colors.neutral.light};

    :last-child {
      border-right: 0;
    }
  }
`;

export const TableBodyContainer = styled.tbody`
  text-align: center;

  tr {
  :last-child {
    td {
      border-bottom: 0;
    }
  }
}

  th,
  td {
    padding: 16px 12px;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.light};
    border-right: 1px solid ${({ theme }) => theme.colors.neutral.light};
    color: ${({ theme }) => theme.colors.neutral.light};

    :last-child {
      border-right: 0;
    }
  }
`;
