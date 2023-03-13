import { TableBodyContainer, TableContainer, TableHeadContainer } from './styles';
import { useMemo } from 'react';
import { useTable } from 'react-table';


export function Table() {
  const data = useMemo(() => [
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
    {
      id: 1,
      nome: 'João',
      carteira_sindical: '123456',
      data_nascimento: '01/01/2000',
      cpf: '123.456.789-00',
      profissao: 'Desenvolvedor',
    },
  ], []);

  const columns = useMemo(() => data[0] ? Object.keys(data[0]).filter(key => key !== 'id').map((key) => ({ Header: key, accessor: key })) : [], []);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <TableContainer {...getTableProps()}>
      <TableHeadContainer>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header').toString().replace('_', ' ')}
              </th>
            ))}
          </tr>
        ))}
      </TableHeadContainer>
      <TableBodyContainer {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>
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
