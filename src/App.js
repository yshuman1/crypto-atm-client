import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Attack from "./components/Attack";

import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Login />}
        <Route exact path="/test" component={Attack} />
      </div>
    );
  }
}

export default App;
