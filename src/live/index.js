import React, { Component } from 'react'

import ButtonCSS from "./css"
import Container from './styled/Container';
import Button from './styled/Button';
import { ThemeProvider } from 'styled-components';
import {cesTheme} from './themes'

class LiveCodingPage extends Component {

  state = {
    speed:"1s"
  }

  handleClick = () => {
    this.setState({
      speed:"3s"
    })
  }


  render() {
    return (
      <ThemeProvider theme={cesTheme}>
        <Container>
          <ButtonCSS speed={this.state.speed} onClick={this.handleClick} />
          <Button speed={this.state.speed} onClick={this.handleClick} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default LiveCodingPage