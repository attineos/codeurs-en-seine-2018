import React, { Component } from 'react'

import TitleSection from '../components/TitleSection'
import { ContainerFlex, Image, Paragraph } from '../styles'

import { AttineosLogo, KindarenaLogoLong, ReactLogo, StyledCompoLogo } from '../images'

class TitlePage extends Component {
  render() {
    return (
      <ContainerFlex>
        <TitleSection />
        <ContainerFlex fd="column" jc="center" ai="center">
          <ContainerFlex fd="column">
            <ContainerFlex jc="space-around" ai="flex-end">
              <Image src={ReactLogo} h="h150" alt="logo reactjs" />
              <Image src={StyledCompoLogo} h="h100" mb="s7" alt="logo styled-components" />
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
          <ContainerFlex fd="column" jc="flex-end" ai="center">
            <Image src={KindarenaLogoLong} h="h75" mb="s21" alt="logo Kindarena" />
            <Image src={AttineosLogo} h="h50" mb="s21" alt="logo Kindarena" />
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default TitlePage
