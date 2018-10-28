
import React, { Component } from 'react'

import { ContainerFlex, Image, Paragraph, SubTitle, Title } from '../components'

import {
  AttineosLogo,
  MailjetLogo,
  Photo,
} from '../images'

class AboutUsPage extends Component {

  render() {

    return (
      <ContainerFlex>
        <ContainerFlex fd="column" bc="blue" onClick={this.goPrev}>
          <ContainerFlex h="80%" fd="column" jc="center" ai="center">
            <Title mb="35px">Marion DEVEAUX</Title>
            <SubTitle>Ingénieure d'études et développement</SubTitle>
            <Paragraph>React</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>Zend Framework 2</Paragraph>
            <Paragraph>Basketball</Paragraph>
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" jc="center" ai="center">
          <Image src={Photo} h="85%" alt="logo react et styled-components" />
      <ContainerFlex mt="25px" jc="space-around">
          <Image bgC="white" src={AttineosLogo} h="80px" alt="logo react et styled-components" />
          <Image bgC="white" src={MailjetLogo} h="100px" alt="logo react et styled-components" />
        </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" bc="blue" onClick={this.goPrev}>
          <ContainerFlex h="80%" fd="column" jc="center" ai="center">
            <Title mb="35px">Valentin DESPORTES</Title>
            <SubTitle>Ingénieur d'études et développement</SubTitle>
            <Paragraph>React</Paragraph>
            <Paragraph>React Native</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>NodeJS</Paragraph>
            <Paragraph>Overwatch</Paragraph>
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default AboutUsPage