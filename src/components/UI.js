import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../assets/ui.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class UI extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { onClickHandler } = this.props;

    onClickHandler(buttonName);
  }

  render() {
    return (
      <div className={`${styles.UI}`}>
        <div className="group">
          <Button name="AC" handleClick={this.handleClick} />
          <Button name="+/-" handleClick={this.handleClick} />
          <Button name="%" handleClick={this.handleClick} />
          <Button name="÷" handleClick={this.handleClick} />
        </div>
        <div className="group">
          <Button name="8" handleClick={this.handleClick} />
          <Button name="7" handleClick={this.handleClick} />
          <Button name="9" handleClick={this.handleClick} />
          <Button name="x" handleClick={this.handleClick} />
        </div>
        <div className="group">
          <Button name="4" handleClick={this.handleClick} />
          <Button name="5" handleClick={this.handleClick} />
          <Button name="6" handleClick={this.handleClick} />
          <Button name="-" handleClick={this.handleClick} />
        </div>
        <div className="group">
          <Button name="1" handleClick={this.handleClick} />
          <Button name="2" handleClick={this.handleClick} />
          <Button name="3" handleClick={this.handleClick} />
          <Button name="+" handleClick={this.handleClick} />
        </div>
        <div className="group">
          <Button name="0" handleClick={this.handleClick} size="2" />
          <Button name="." handleClick={this.handleClick} />
          <Button name="=" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

UI.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default UI;
