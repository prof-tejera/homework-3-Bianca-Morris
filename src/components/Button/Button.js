import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const {
      cls = "",
      text = "Click Me",
      disabled = false,
      onClick,
      value,
      type = "button" } = this.props;
    return <button className={"Default-button " + cls} {...{ disabled, onClick, type, value }}>{text}</button>;
  }
}

export default Button;
