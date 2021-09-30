import { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  clearForm() {
    this.setState({ username: "", password: "" });
  }

  onTextChange(e) {
    const { target: { value = "", name = null } = {} } = e;
    
    if (!name) { throw new Error("Cannot find name of input"); }
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { username } = this.state;
    alert(`Welcome, ${username}!`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="username" onChange={(e) => this.onTextChange(e)}/>
        <input type="password" name="password" onChange={(e) => this.onTextChange(e)}/>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
