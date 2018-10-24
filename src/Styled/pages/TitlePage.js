import React, { Component } from 'react'

import { ContainerFlex, Image, Paragraph, SubTitle, Title } from '../components'

import {
  codeursEnSeineLogoWhite,
  photo,
  kindarenaLogoLong,
  reactLogo,
  styledCompoLogo,
} from '../../images'

class TitlePage extends Component {

  render() {
    const {
      next,
    } = this.props

    return (
      <ContainerFlex>
        <ContainerFlex fd="column" bc="blue" onClick={this.goPrev}>
          <ContainerFlex h="80%" fd="column" jc="center" ai="center">
            <Title>Style(d) et React, même Compo</Title>
            <SubTitle>Codeurs en Seine 2018</SubTitle>
            <Paragraph>Marion DEVEAUX</Paragraph>
            <Paragraph>Valentin DESPORTES</Paragraph>
          </ContainerFlex>
          <ContainerFlex h="20%" jc="space-around" ai="flex-end">
            <Image src={codeursEnSeineLogoWhite} h="110px" alt="logo react et styled-components" />
            <Image src={kindarenaLogoLong} h="100px" alt="logo Kindarena" />
          </ContainerFlex>
        </ContainerFlex>
        { !next && (
          <ContainerFlex fd="column" jc="center" ai="center" onClick={this.goNext}>
            <Image src={reactLogo} h="20%" alt="logo reactjs" />
              <SubTitle col="blue">Reactjs : HTML in JS</SubTitle>
            <Image src={styledCompoLogo} h="15%" alt="logo styled-components" />
              <SubTitle col="blue">Styled-components : CSS in JS</SubTitle>
          </ContainerFlex>
        )}
        { next && (
          <ContainerFlex fd="column" jc="center">
            <Image src={photo} h="inherit" alt="logo react et styled-components" />
          </ContainerFlex>
        )}
      </ContainerFlex>
    )
  }
}

export default TitlePage