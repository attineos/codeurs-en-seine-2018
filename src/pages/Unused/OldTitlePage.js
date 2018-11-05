import React, { Component } from 'react'

import { ContainerFlex, Image, TitleSection } from '../../components'

import { photo } from '../../../images'

class TitlePage extends Component {
  render() {
    return (
      <ContainerFlex>
        <TitleSection />
        <ContainerFlex fd="column" jc="center">
          <Image src={photo} h="inherit" alt="logo react et styled-components" />
        </ContainerFlex>
      </ContainerFlex>
    )
  }
}

export default TitlePage
