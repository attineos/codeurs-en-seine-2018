import React, { Component } from 'react'

import { ContainerFlex, Image, Link, Paragraph, StyledHr, SubTitle, Title } from '../styles'

import { AttineosLogo, MailjetLogo, Photo } from '../images'

class AboutUsPage extends Component {
  render() {
    return (
      <ContainerFlex>
        <ContainerFlex fd="column" bc="darkBlue">
          <ContainerFlex fd="column" jc="center" ai="center">
            <Title>Marion DEVEAUX</Title>
            <SubTitle>Ingénieure d&apos;études et développement</SubTitle>
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
          <Image src={Photo} h="hp85" alt="logo react et styled-components" />
          <ContainerFlex mt="s8" jc="space-around">
            <Image bgC="white" src={AttineosLogo} h="h75" alt="logo react et styled-components" />
            <Image bgC="white" src={MailjetLogo} h="h100" alt="logo react et styled-components" />
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex fd="column" bc="darkBlue">
          <ContainerFlex fd="column" jc="center" ai="center">
            <Title>Valentin DESPORTES</Title>
            <SubTitle>Ingénieur d&apos;études et développement</SubTitle>
            <StyledHr />
            <Paragraph>React</Paragraph>
            <Paragraph>React Native</Paragraph>
            <Paragraph>Styled-components</Paragraph>
            <Paragraph>NodeJS</Paragraph>
            <Paragraph>Overwatch</Paragraph>
            <StyledHr />
            <Link href="https://twitter.com/MarionDev0" target="_blank" rel="noopener norefer">
              Twitter : <b>@V4lulz</b>
            </Link>
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default AboutUsPage
