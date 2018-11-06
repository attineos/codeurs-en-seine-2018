import React, { Component } from 'react'

import { ContainerFlex, Image, Title } from '../components'

import { IdeaJpg } from '../images'

class QuestionPage extends Component {
  render() {
    return (
      <ContainerFlex
        fd="column"
        ai="center"
        jc="center"
        bc={this.props.color}
        onClick={this.goPrev}
      >
        <Title mb="25px">Questions ?</Title>
        <Image src={IdeaJpg} w="40%" alt="image" />
        <Title flip mt="25px">
          Questions ?
        </Title>
      </ContainerFlex>
    )
  }
}

export default QuestionPage
