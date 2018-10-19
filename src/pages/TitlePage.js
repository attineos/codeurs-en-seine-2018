import React, { Component } from 'react'

import { ContainerFlex, Image, Paragraph, TitleSection } from '../components'

import {
  attineosLogo,
  kindarenaLogoLong,
  reactLogo,
  styledCompoLogo,
} from '../images'

class TitlePage extends Component {

  render() {

    return (
      <ContainerFlex>
        <TitleSection />
        <ContainerFlex fd="column" jc="center" ai="center">
          <ContainerFlex fd="column">
            <ContainerFlex jc="space-around" ai="flex-end">
              <Image src={reactLogo} h="150px" alt="logo reactjs" />
              <Image src={styledCompoLogo} h="100px" mb="20px" alt="logo styled-components" />
            </ContainerFlex>
            <ContainerFlex jc="space-around" ai="flex-start" h='auto'>
              <Paragraph mt="25px" col="blue">Reactjs : HTML in JS</Paragraph>
              <Paragraph mt="25px" col="blue">Styled-components : CSS in JS</Paragraph>
            </ContainerFlex>
          </ContainerFlex>
          <ContainerFlex fd="column" jc="flex-end" ai="center">
            <Image src={kindarenaLogoLong} h="75px" mb="75px" alt="logo Kindarena" />
            <Image src={attineosLogo} h="50px" mb="75px" alt="logo Kindarena" />
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default TitlePage