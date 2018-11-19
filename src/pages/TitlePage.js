import React, { Component } from 'react'

import TitleSection from '../components/TitleSection'
import { AnimatedContainerFlex, ContainerFlex, Image, Paragraph } from '../styles'

import { Attineos, Kindarena, ReactSvg, StyledCompoLogo } from '../images'

class TitlePage extends Component {
  render() {
    return (
      <AnimatedContainerFlex>
        <TitleSection bc="darkBlue" />
        <ContainerFlex fd="column" jc="center" ai="center">
          <ContainerFlex fd="column">
            <ContainerFlex jc="space-around" ai="flex-end">
              <Image src={ReactSvg} h="h150" alt="logo reactjs" />
              <Image src={StyledCompoLogo} h="h150" mb="s7" alt="logo styled-components" />
            </ContainerFlex>
            <ContainerFlex jc="space-around" ai="flex-start" h="auto">
              <Paragraph mt="s8" color="darkBlue">
                Reactjs : HTML in JS
              </Paragraph>
              <Paragraph mt="s8" color="darkBlue">
                Styled-components : CSS in JS
              </Paragraph>
            </ContainerFlex>
          </ContainerFlex>
          <ContainerFlex fd="column" jc="flex-end" ai="center" h="hp45">
            <Image src={Kindarena} h="h75" mb="s20" alt="logo Kindarena" />
            <Image src={Attineos} h="h75" mb="s20" alt="logo Attineos" />
          </ContainerFlex>
        </ContainerFlex>
      </AnimatedContainerFlex>
    )
  }
}

export default TitlePage
