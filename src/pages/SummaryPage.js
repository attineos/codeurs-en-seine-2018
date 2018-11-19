import React, { Component } from 'react'

import { AnimatedContainerFlex } from '../styles'

import TitleSection from '../components/TitleSection'

class SummaryPage extends Component {
  render() {
    return (
      <AnimatedContainerFlex fd="column" jc="center">
        <TitleSection bc={this.props.bc} />
      </AnimatedContainerFlex>
    )
  }
}

export default SummaryPage
