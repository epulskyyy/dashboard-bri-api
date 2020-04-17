import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
const Col = (props) => {
  return <div className={props.class}>{props.children}</div>;
};

Col.propTypes = {
  class: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Col;
