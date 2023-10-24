import React, { Component } from "react";

class Link extends Component {
  state = {};
  render() {
    return (
      <a className="link" href="#">
        {this.props.text}
      </a>
    );
  }
}

export default Link;
