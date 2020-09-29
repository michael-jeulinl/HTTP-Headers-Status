/**
 *
 * Sidebar.tsx
 *
 * Display the sidebar panel using the default logo application as menu header
 */
import React from 'react';
import Img from '../Img';

/**
 * @ignore
 */
interface Props {
  src: string,
}

export default function Sidebar(props: Props) {
  return (
    <div className="App-sidebar">
      <Img alt="HTTP-Header-Status logo menu" src={props.src} />
    </div>

    // Menu
  );
}
