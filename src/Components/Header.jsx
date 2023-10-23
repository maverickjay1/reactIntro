import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1>Orakle</h1>
        <p>Election Betting: Forecast & Management</p>
        <Nav />
      </header>
    );
  }
}

export default Header;
