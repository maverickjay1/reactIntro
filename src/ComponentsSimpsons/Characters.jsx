import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

import React, { Component } from "react";
class Characters extends Component {
  state = {};
  render() {
    return (
      <>
        <Character character={this.props.character} />
        <Quote quote={this.props.quote} />
        <Image image={this.props.image} character={this.props.character} />
        <Controls />
      </>
    );
  }
}

export default Characters;
