import React, { Component } from 'react'

import { ContainerFlex, Image, Paragraph, SubTitle, Title } from '../components'
import final from '../../images/final.png'
import ces from '../../images/ces.png'
import kindarena from '../../images/kindarena.png'
import reactLogo from '../../images/React.js_logo.png'
import styledCompoLogo from '../../images/styled-components.png'

class TitlePage extends Component {

  render() {
    return (
      <ContainerFlex fd="column">
        <Title>Style(d) et React, même Compo</Title>
        <SubTitle>Codeurs en Seine 2018</SubTitle>
        <ContainerFlex jc="space-between" ai="center">
          <Image src={reactLogo} h="150px" alt="logo Codeurs en Seine" />
          <Image src={final} h="500px" alt="logo react et styled-components" />
          <Image src={styledCompoLogo} h="150px" alt="logo Kindarena" />
        </ContainerFlex>
        <ContainerFlex jc="space-between" ai="center">
          <Paragraph>Marion DEVEAUX</Paragraph>
          <Image src={ces} h="200px" alt="logo react et styled-components" />
          <Image src={kindarena} h="200px" alt="logo Kindarena" />
          <Paragraph>Valentin DESPORTES</Paragraph>
        </ContainerFlex>
        {/* <Paragraph>Avec React, vous pouviez faire du HTML en JS. Et pourquoi ne pas aller plus loin ? Avec styled-components, ajoutons la puissance du CSS-in-JS à notre application.
#Une combinaison détonante à découvrir avec nous !</Paragraph> */}
      </ContainerFlex>
    )
  }
}

export default TitlePage