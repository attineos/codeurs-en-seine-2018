import React, { Component, Fragment } from 'react'

import { Paragraph, Title } from '../components'

class TitlePage extends Component {

  render() {
    return (
      <Fragment>
        <Title>Style(d) et React, même Compo</Title>
        <Title>Codeurs en Seine 2018</Title>
        <Paragraph>Avec React, vous pouviez faire du HTML en JS. Et pourquoi ne pas aller plus loin ? Avec styled-components, ajoutons la puissance du CSS-in-JS à notre application.
#Une combinaison détonante à découvrir avec nous !</Paragraph>
        <Paragraph>Marion DEVEAUX</Paragraph>
        <Paragraph>Valentin DESPORTES</Paragraph>
      </Fragment>
    )
  }
}

export default TitlePage