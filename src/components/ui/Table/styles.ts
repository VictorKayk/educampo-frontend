import styled from 'styled-components';

export const TableContainer = styled.table`
  border-spacing: 0 32px;
`;

export const TableHeadContainer = styled.thead`
  text-align: center;

  th {
    font-family: 'EB Garamond', serif;
    font-weight: 800;
    font-size: 32px;
    padding-bottom: 16px;
    color: #000;
  }
`;

export const TableBodyContainer = styled.tbody`
  text-align: center;

  tr {
    font-size: 24px;
    border-radius: 28px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #000;

    td {
      padding: 24px;
    }

    td:first-child {
      border-top-left-radius: 28px;
      border-bottom-left-radius: 28px;
    }

    td:last-child {
      border-top-right-radius: 28px;
      border-bottom-right-radius: 28px;
    }
  }
}
`;
