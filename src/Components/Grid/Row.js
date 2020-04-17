import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
const Row = (props) => {
  return <div className={props.class}>{props.children}</div>;
};

Row.propTypes = {
  class: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Row;
