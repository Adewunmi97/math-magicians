/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/view.module.css';

class View extends Component {
  render() {
    const { output } = this.props;
    return (
      <div className={`${styles.View}`}>
        <p>{output}</p>
      </div>
    );
  }
}

View.propTypes = {
  output: PropTypes.number.isRequired,
};

export default View;
