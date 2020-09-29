/**
 *
 * Img.tsx
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */
import React from 'react';

/**
 * @ignore
 */
interface Props {
  className?: string,
  src: string,
  alt: string,
}

export default function Img(props: Props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}
