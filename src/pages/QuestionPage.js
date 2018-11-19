import React, { Component } from 'react'

import { AnimatedContainerFlex, Image, Title } from '../styles'

import { IdeaJpg } from '../images'

class QuestionPage extends Component {
  render() {
    return (
      <AnimatedContainerFlex fd="column" ai="center" jc="center" bc="black">
        <Title>Questions ?</Title>
        <Image src={IdeaJpg} w="wp30" alt="idea" />
        <Title flip>Questions ?</Title>
      </AnimatedContainerFlex>
    )
  }
}

export default QuestionPage
