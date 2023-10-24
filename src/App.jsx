import React, { Component } from "react";
import axios from "axios";

import Characters from "./ComponentsSimpsons/Characters";

class App extends Component {
  state = { simpsons: [] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.simpsons.map((item) => {
          return <Characters {...item} />;
          console.log(item);
        })}
      </>
    );
  }
}

export default App;
