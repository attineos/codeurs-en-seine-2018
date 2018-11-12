import React, { Component } from 'react'

import { AnimatedContainerFlex, ContainerFlex, Image, SubTitle, Title } from '../styles'

import { CodeursEnSeineLogoWhite } from '../images'

class SummaryPage extends Component {
  render() {
    return (
      <AnimatedContainerFlex fd="column" jc="center" bc={this.props.bc} onClick={this.goPrev}>
        <ContainerFlex h="hp70" fd="column" jc="center" ai="center">
          <Title>Style(d) et React, même Compo</Title>
          <SubTitle mt="s0" mb="s0">
            Marion DEVEAUX
          </SubTitle>
          <SubTitle>Valentin DESPORTES</SubTitle>
        </ContainerFlex>
        <ContainerFlex h="hp30" jc="space-around" ai="flex-end">
          <Image
            src={CodeursEnSeineLogoWhite}
            h="h200"
            mb="s14"
            alt="Codeurs en Seine logo white"
          />
        </ContainerFlex>
      </AnimatedContainerFlex>
    )
  }
}

export default SummaryPage
