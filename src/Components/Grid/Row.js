import React from 'react';
import './Grid.css';
export default function Row(props) {
  return <div className={props.class}>{props.children}</div>;
}
