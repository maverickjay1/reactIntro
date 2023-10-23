import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import React, { Component } from "react";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
