/*
 * Header
 *
 */
import React from 'react';

export default function H1(props: any) {
  return (
    <h1 {...props}><span />{props.children}</h1>
  );
}
