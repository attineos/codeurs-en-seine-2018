import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCSS from "./CSS";
import ButtonStyled from './Syled';
import { Paragraph, Title } from './Syled/components';

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
          <Title>
          The spectacle before us was indeed sublime.
          </Title>
          <Paragraph>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.
          </Paragraph>
        </header>
      </div>
    );
  }
}

export default App;
