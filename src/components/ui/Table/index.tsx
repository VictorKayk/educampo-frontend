import { TableBodyContainer, TableContainer, TableHeadContainer } from './styles';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Associado } from '../../../types/associate';


interface TableProps {
  data: Associado[] | [];
}

export function Table({ data }: TableProps) {
  const columns = useMemo(() => data[0] ? Object.keys(data[0])
    .filter(key => ['nome', 'cpf', 'carteiraSindical', 'edataNascimento', 'profissao'].includes(key))
    .map((key) => ({Header: key, accessor: key })) : [], [data]);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <TableContainer {...getTableProps()}>
      <TableHeadContainer>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index}>
                {column.render('Header').toString().replace('_', ' ')}
              </th>
            ))}
          </tr>
        ))}
      </TableHeadContainer>
      <TableBodyContainer {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} key={index}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </TableBodyContainer>
    </TableContainer>
  );
}
