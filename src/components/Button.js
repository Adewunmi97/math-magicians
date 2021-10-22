import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/button.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const { name, handleClick } = this.props;
    let classes = styles.Button;
    if (name === '0') classes += ` ${styles.ButtonSpan2}`;
    if (name === 'x' || name === '÷' || name === '-' || name === '+' || name === '=') classes += ` ${styles.ButtonOrange}`;

    const onClickHandler = () => handleClick(name);

    return (
      <button type="button" className={`${classes}`} onClick={onClickHandler}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
