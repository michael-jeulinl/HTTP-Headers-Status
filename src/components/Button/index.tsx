/**
 *
 * Button.js
 *
 * A common button
 */

import React from 'react';

interface IProps {
  label: string;
  onClick?(e: React.MouseEvent<any>): any;
}

export default function Button(props: IProps) {
  return <button  className="App-button"
                  key={props.label}
                  onClick={props.onClick}>{props.label}</button>
}
