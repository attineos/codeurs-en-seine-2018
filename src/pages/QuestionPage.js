import React, { Component } from 'react'

import { ContainerFlex, Image, Title } from '../styles'

import { IdeaJpg } from '../images'

class QuestionPage extends Component {
  render() {
    return (
      <ContainerFlex fd="column" ai="center" jc="center" bc="black">
        <Title>Questions ?</Title>
        <Image src={IdeaJpg} w="wp30" alt="image" />
        <Title flip>Questions ?</Title>
      </ContainerFlex>
    )
  }
}

export default QuestionPage
