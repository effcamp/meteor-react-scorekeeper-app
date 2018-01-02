import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = (props) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>props.subtitle</h2>}
    </div>
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleBar;
