import { useMemo } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import { useTable, useSortBy } from 'react-table';
import getRandomData from './dataGenerator';

export default function PlayingHistoryTable() {
  const data = useMemo(() => getRandomData(20), [])
  const columns = useMemo(() => [
    {
      Header: 'Dataset',
      accessor: 'dataset'
    },
    {
      Header: 'Score',
      accessor: 'score',
      isNumeric: true
    },
    {
      Header: 'Time',
      accessor: 'time'
    }
  ], [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

  return (
    <TableContainer>
      <Table variant='simple' {...getTableProps}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  isNumeric={column.isNumeric}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)

            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td 
                    {...cell.getCellProps()} 
                    isNumeric={cell.column.isNumeric}
                    color={cell.column.isNumeric ? (cell.value[0] !== '-' ? '#65D6AD' : 'red.400') : null}
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}