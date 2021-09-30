import { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    const { cls = "", onChange, type = "text", placeholder = "Type something...", value = "", name } = this.props;
    return <input className={cls + "form-input"} {...{ onChange, type, placeholder, value, name }}/>;
  }
}

export default Input;
