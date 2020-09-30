import React from 'react';
import { useTable } from 'react-table';

import columns from './columns';

export default function HistoryTable() {
  // Dump data
  let data: Array<any> = [];

  const {
    getTableProps,      // table props from react-table
    getTableBodyProps,  // table body props from react-table
    headerGroups,       // headerGroups, if your table has groupings
    rows,               // rows for the table based on the data passed
    prepareRow,         // Prepare the row (needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.value}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
