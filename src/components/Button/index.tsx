/**
 *
 * Button.js
 *
 * A common button
 */

import React from 'react';

interface IProps {
  label: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<any>): any;
}

export default function Button(props: IProps) {
  return <button  className="App-button"
                  key={props.label}
                  disabled={props.disabled}
                  onClick={props.onClick}>{props.label}</button>
}
