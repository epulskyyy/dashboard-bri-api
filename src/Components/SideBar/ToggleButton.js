import React from 'react';
import './ToggleButton.css';
import ActionContext from '../../Context/ActionContext';
const ToggleButton = (prps) => (
  <ActionContext.Consumer>
    {(ev) => {
      return (
        <button className="toggle-button" onClick={ev.clickToggle}>
          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
        </button>
      );
    }}
  </ActionContext.Consumer>
);
export default ToggleButton;
