
import React, { Component } from 'react'

import { ContainerFlex, Image, SubTitle, Title } from '../components'

import {
  CodeursEnSeineLogoWhite,
} from '../images'

class SummaryPage extends Component {

  render() {

    return (<ContainerFlex fd="column" bc={this.props.color} onClick={this.goPrev}>
      <ContainerFlex h="80%" fd="column" jc="center" ai="center">
        <Title mb="35px">Style(d) et React, même Compo</Title>
        <SubTitle>Marion DEVEAUX</SubTitle>
        <SubTitle>Valentin DESPORTES</SubTitle>
      </ContainerFlex>
      <ContainerFlex h="20%" jc="space-around" ai="flex-end">
        <Image src={CodeursEnSeineLogoWhite} h="200px" mb="75px" alt="logo react et styled-components" />
      </ContainerFlex>
    </ContainerFlex>
    )
  }
}

export default SummaryPage