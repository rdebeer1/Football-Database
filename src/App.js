import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    res: {}
  }


  render() {
    const { res } = this.state

    return (
      <div className="App">
      <h1>{res.fixtures}</h1>
      </div>
    );
  }
}

export default App;
