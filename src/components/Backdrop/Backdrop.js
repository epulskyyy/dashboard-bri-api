import React from 'react';
import './Backdrop.css';
import ActionContext from '../../Context/ActionContext';
const backDrop = (props) => (
  <ActionContext.Consumer>
    {(ev) => {
      return <div className="backdrop" onClick={ev.clickBackDrop} />;
    }}
  </ActionContext.Consumer>
);

export default backDrop;
