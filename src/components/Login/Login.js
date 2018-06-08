import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  login = event => {
    event.preventDefault();
    axios
      .post("https://yasin-lambda-notes.herokuapp.com/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(
        res => {
          this.setState({
            success: true,
            errorMessage: ""
          });
          window.localStorage.setItem("jwt_token", res.data.token);
          this.props.history.push("/success");
        },
        err => {
          this.setState({
            success: false,
            errorMessage: err.response.data.error
          });
        }
      );
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.login}>
        <div className="input-field">
          <input
            type="text"
            name="username"
            value={username}
            required={true}
            onChange={this.handleUsernameChange}
            placeholder="Username"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            value={password}
            required={true}
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
    );
  }
}
