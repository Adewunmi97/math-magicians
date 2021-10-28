/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/view.module.css';

class View extends Component {
  render() {
    const { output, operation, next } = this.props;
    return (
      <div data-testid="screen" className={`${styles.View}`}>
        <p>{output || null}</p>
        <p>{operation || null}</p>
        <p>{output || operation || next ? next : '0'}</p>
      </div>
    );
  }
}

View.propTypes = {
  output: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

View.defaultProps = {
  output: '',
  operation: '',
  next: '',
};

export default View;
