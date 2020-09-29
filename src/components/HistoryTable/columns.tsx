/*
 * History data headers definition
 */
import { Column } from 'react-table';

const columns:Array<Column> = [
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Url',
    accessor: 'url'
  },
  {
    Header: 'Status',
    accessor: 'statusIcon',
  },
  {
    Header: 'Flags',
    accessor: 'flags',
  },
  {
    Header: 'Cloudfront status',
    accessor: 'frontStatus',
  },
  {
    Header: 'Cloudfront pop',
    accessor: 'cloudfrontPOP',
  }
];

export default columns;
