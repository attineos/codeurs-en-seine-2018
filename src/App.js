import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCSS from "./CSS";
import ButtonStyled from './Syled';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonCSS />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonStyled speed="0.1s" />
        </header>
      </div>
    );
  }
}

export default App;
