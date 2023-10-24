import React, { Component } from "react";

import Link from "./Link";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Link text={"Home"} />
        <Link text={"Media Listener"} />
        <Link text={"Qualitative Analysis"} />
        <Link text={"Polls/Surveys"} />
        <Link text={"Bet Management"} />
        <Link text={"Live Bet Data"} />
        <Link text={"Historical Bet Data"} />
        <Link text={"Data Query"} />
        <Link text={"Prediction Fundamentals"} />
      </nav>
    );
  }
}

export default Nav;
