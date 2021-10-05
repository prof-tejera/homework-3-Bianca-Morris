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
      type = "button",
      color = "",
      size = ""
    } = this.props;

    const fullCls = `Default-button ${cls} ${color} ${size}`;
    return <button className={fullCls} {...{ disabled, onClick, type, value }}>{text}</button>;
  }
}

export default Button;
