/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import View from './View';
import UI from './UI';
import styles from '../assets/calculator.module.css';

class Calculator extends Component {
  render() {
    return (
      <div className={`${styles.Calculator}`}>
        <View output={0} />
        <UI />
      </div>
    );
  }
}

export default Calculator;
