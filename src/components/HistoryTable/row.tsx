import React from 'react';
import { IProps } from './index';

export default function Row(props: IProps) {
  if (props.isLoading) {
    return (
      <tr>
        <td>{props.reqDate}</td>
        <td>{props.reqUrl}</td>
        <td>loading...</td>
      </tr>
    );
  } else if (props.isError) {
    return (
      <tr>
        <td>{props.reqDate}</td>
        <td>{props.reqUrl}</td>
        <td>error</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{props.reqDate}</td>
      <td>{props.reqUrl}</td>
      <td>{props.data?.statusCode}</td>
      <td>{props.data?.poweredBy}</td>
      <td>{props.data?.serverType}</td>
      <td>{props.data?.secure ? 'Secure' : 'Nope'}</td>
      <td>{props.data?.cacheStatus}</td>
      <td>{props.data?.awsOrigin}</td>
    </tr>
  );
}
