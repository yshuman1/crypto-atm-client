import React, { Component } from "react";

class Attack extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Can you see this?</h1>
      </div>
    );
  }
}

export default Attack;
