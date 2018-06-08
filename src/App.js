import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { Route } from "react-router-dom";
import Success from "./components/success";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/success" component={Success} />
      </div>
    );
  }
}

export default App;
