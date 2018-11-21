import React, { Component } from 'react'

import {
  AnimatedContainerFlex,
  ContainerFlex,
  Image,
  Link,
  Paragraph,
  StyledHr,
  SubTitle,
  Title,
} from '../styles'

import { Attineos, Mailjet, Photo } from '../images'

class AboutUsPage extends Component {
  render() {
    return (
      <AnimatedContainerFlex>
        <ContainerFlex fd="column" bc="darkBlue">
          <ContainerFlex fd="column" jc="center" ai="center">
            <Title>Marion DEVEAUX</Title>
            <SubTitle>Ingénieure Études et développement</SubTitle>
            <StyledHr />
            <Paragraph>React</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>Zend Framework 2</Paragraph>
            <Paragraph>Basketball</Paragraph>
            <StyledHr />
            <Link href="https://twitter.com/MarionDev0" target="_blank" rel="noopener norefer">
              Twitter : <b>@MarionDev0</b>
            </Link>
            <Link
              href="https://fr.linkedin.com/in/marion-deveaux-a70107a0"
              target="_blank"
              rel="noopener norefer"
            >
              LinkedIn
            </Link>
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" jc="center" ai="center">
          <Image src={Photo} h="hp85" alt="Photo of Marion and Valentin" />
          <ContainerFlex mt="s8" jc="space-around" ai="center">
            <Image bgC="white" src={Attineos} h="h75" alt="Attineos logo" />
            <Image bgC="white" src={Mailjet} h="h115" alt="Mailjet logo" />
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" bc="darkBlue">
          <ContainerFlex fd="column" jc="center" ai="center">
            <Title>Valentin DESPORTES</Title>
            <SubTitle>Ingénieur Études et développement</SubTitle>
            <StyledHr />
            <Paragraph>React</Paragraph>
            <Paragraph>React Native</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>NodeJS</Paragraph>
            <Paragraph>Overwatch</Paragraph>
            <StyledHr />
            <Link href="https://twitter.com/V4lulz" target="_blank" rel="noopener norefer">
              Twitter : <b>@V4lulz</b>
            </Link>
          </ContainerFlex>
        </ContainerFlex>
      </AnimatedContainerFlex>
    )
  }
}

export default AboutUsPage
