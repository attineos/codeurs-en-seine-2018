import React, { Component } from 'react'

import ButtonCSS from './css'
import Title from './styled/Title'
import ContainerFlex from '../styles/ContainerFlex'
import StyledHr from '../styles/StyledHr'
import Presentation from './styled/Presentation'

const SPEEDS = ['3s', '2s', '1s']

class LiveCodingPage extends Component {
  state = {
    speedIndex: 0,
  }

  handleClick = () => {
    this.setState(prevState => ({
      speedIndex: (prevState.speedIndex + 1) % SPEEDS.length,
    }))
  }

  render() {
    const { speedIndex } = this.state

    return (
      <ContainerFlex fd="row">
        <ContainerFlex fd="column" ai="center">
          <Title color="darkBlue">Button CSS</Title>
          <ButtonCSS speed={SPEEDS[speedIndex]} onClick={this.handleClick} />
          <StyledHr />
          <Presentation speed={SPEEDS[speedIndex]} onClick={this.handleClick} />
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default LiveCodingPage
