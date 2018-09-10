import React, { Component } from "react";
import NavBar from "./componenets/navbar";
import Counters from "./componenets/counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
