import React, { Component } from "react";

class Link extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <a className="link" href="#">
          {this.props.text}
        </a>
      </React.Fragment>
    );
  }
}

export default Link;
