import { TableBodyContainer, TableContainer, TableHeadContainer } from './styles';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { IAssociado } from '../../../types/associate';
import { Link } from 'react-router-dom';
import person from '../../../assets/images/icons/person.svg';


interface TableProps {
  data: IAssociado[] | [];
}

export function Table({ data }: TableProps) {
  const columns = useMemo(
    () => [
      {
        Header: '',
        id: 'view',
        accessor: (row) => (
          <Link to={`${row.id}`}>
            <img src={person} alt="Person Icon" width={38} />
          </Link>
        ),
      },
      {
        Header: 'N°',
        accessor: 'carteiraSindical',
      },
      {
        Header: 'Nome',
        accessor: 'nome',
      },
      {
        Header: 'CPF',
        accessor: 'cpf',
      },
      {
        Header: 'Data de nascimento',
        accessor: 'dataNascimento',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <TableContainer {...getTableProps()}>
      <TableHeadContainer>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </TableHeadContainer>
      <TableBodyContainer {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr key={data[index].id} {...row.getRowProps()}>
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
