import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
const ButtonGreen = (props) => (
  <button className="btn btn-green">{props.children}</button>
);

ButtonGreen.propTypes = {
  children: PropTypes.string,
};

export default ButtonGreen;
