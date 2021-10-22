import React, { Component } from 'react';
import Button from './Button';
import styles from '../assets/ui.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class UI extends Component {
  render() {
    return (
      <div className={`${styles.UI}`}>
        <div className="group">
          <Button name="AC" value="clear" />
          <Button name="+/-" value="+/-" />
          <Button name="%" value="%" />
          <Button name="÷" />
        </div>
        <div className="group">
          <Button name="7" value="7" />
          <Button name="8" value="8" />
          <Button name="9" value="9" />
          <Button name="x" value="*" />
        </div>
        <div className="group">
          <Button name="4" value="4" />
          <Button name="5" value="5" />
          <Button name="6" value="6" />
          <Button name="-" value="-" />
        </div>
        <div className="group">
          <Button name="1" value="1" />
          <Button name="2" value="2" />
          <Button name="3" value="3" />
          <Button name="+" value="+" />
        </div>
        <div className="group">
          <Button name="0" size="2" value="0" />
          <Button name="." value="." />
          <Button name="=" value="equal" />
        </div>
      </div>
    );
  }
}

export default UI;
