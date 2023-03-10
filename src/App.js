import React, { Component } from 'react';
import './TicTacToe.css';
import Game from './Game';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <Game></Game>
        </p>
      </div>
    );
  }
}

export default App;