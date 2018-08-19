import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find the angle between two points</h1>
        </header>
        <Calculator />
        <p>
          Source Code on{" "}
          <a href="https://github.com/signalwerk/getangel">Github</a>.
        </p>{" "}
      </div>
    );
  }
}

export default App;
