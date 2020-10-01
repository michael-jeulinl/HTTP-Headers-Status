import React from 'react';
import columns from './columns';
import Row from './row';

/**
 * @ignore
 */
interface IData {
  poweredBy: string,
  statusCode: number,
  serverType: string,
  secure: boolean,
  cacheStatus: string,
  awsOrigin: string,
}

/**
 * @ignore
 */
export interface IProps {
  reqId: string;
  reqDate: string;
  reqUrl: string;
  isLoading: boolean;
  isError: boolean;
  data?: IData;
}

export default function HistoryTable(props: IProps[]) {
  return (
    <table>
      <thead>
        <tr>{columns.map(column => <th>{column.header}</th>)}</tr>
      </thead>
      <tbody>
        {Object.values(props).map(row => <Row {...row} />)}
      </tbody>
    </table>
  );
}
