
import React, { Component } from 'react'

import { ContainerFlex, Image, Paragraph, SubTitle, Title } from '../components'

import {
  attineosLogo,
  mailjetLogo,
  photo,
} from '../../images'

class AboutUsPage extends Component {

  render() {

    return (
      <ContainerFlex>
        <ContainerFlex fd="column" bc="blue" onClick={this.goPrev}>
          <ContainerFlex h="80%" fd="column" jc="center" ai="center">
            <Title mb="35px">Marion DEVEAUX</Title>
            <SubTitle>Ingénieure d'études et développement</SubTitle>
            <Paragraph>Reactjs</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>Zend Framework 2</Paragraph>
            <Paragraph>Basketball</Paragraph>
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" jc="center" ai="center">
          <Image src={photo} h="85%" w="90%" alt="logo react et styled-components" />
      <ContainerFlex mt="25px" jc="space-around">
          <Image bgC="white" src={attineosLogo} h="80px" alt="logo react et styled-components" />
          <Image bgC="white" src={mailjetLogo} h="100px" alt="logo react et styled-components" />
        </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" bc="blue" onClick={this.goPrev}>
          <ContainerFlex h="80%" fd="column" jc="center" ai="center">
            <Title mb="35px">Valentin DESPORTES</Title>
            <SubTitle>Ingénieur d'études et développement</SubTitle>
            <Paragraph>Reactjs</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>NodeJs</Paragraph>
            <Paragraph>Hobbies</Paragraph>
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default AboutUsPage