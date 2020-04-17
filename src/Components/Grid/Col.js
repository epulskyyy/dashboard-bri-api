import React from 'react';

export default function Col(props) {
  return <div className={props.class}>{props.children}</div>;
}
