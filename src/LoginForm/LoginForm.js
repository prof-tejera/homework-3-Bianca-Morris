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
    this.clearForm();
    e.preventDefault();
  }

  render() {
    const { username = "", password = "" } = this.state;
    return (
      <form className="form-login" onSubmit={(e) => this.handleSubmit(e)}>
        <FormInput type="text" name="username" value={username} placeholder="Username" onChange={(e) => this.onTextChange(e)}/>
        <FormInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => this.onTextChange(e)}/>
        <LoginButton cls="form-submit" value="Login" disabled={!username || !password} />
      </form>
    );
  }
}

const FormInput = ({ onChange, type, placeholder, value, name }) => {
  return <input {...{ onChange, type, placeholder, value, name }}/>
}

const LoginButton = ({ value = "Login", cls = "", disabled = false }) => {
  return <input className={cls + " form-submit"} type="submit" {...{ value, disabled }}/>
}

export default LoginForm;
