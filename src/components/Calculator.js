import React, { useState } from 'react';
import View from './View';
import UI from './UI';
import calculate from '../logic/calculate';
import styles from '../assets/calculator.module.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    setState({ ...state, ...calculate(state, buttonName) });
  };

  const { total, next, operation } = state;

  return (
    <div className={`${styles.Calculator}`}>
      <View output={total} operation={operation} next={next} />
      <UI onClickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
