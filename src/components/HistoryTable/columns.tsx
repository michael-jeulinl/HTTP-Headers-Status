/*
 * History data headers definition
 */
/**
 * @ignore
 */
interface IPair {
  header: string,
  accessor: string
}

const columns:IPair[] = [
  {
    header: 'Date',
    accessor: 'reqDate',
  },
  {
    header: 'Url',
    accessor: 'reqUrl'
  },
  {
    header: 'Status',
    accessor: 'statusCode',
  },
  {
    header: 'Power By',
    accessor: 'poweredBy',
  },
  {
    header: 'Server Type',
    accessor: 'serverType',
  },
  {
    header: 'Security',
    accessor: 'secure',
  },
  {
    header: 'Cache status',
    accessor: 'cloudfrontPOP',
  },
  {
    header: 'AWS Origin',
    accessor: 'awsOrigin',
  }
];

export default columns;
