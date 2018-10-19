import React, { Component, Fragment } from 'react'

import ButtonCSS from "../../CSS"
import ButtonStyled from '../../Styled'

class LiveCodingPage extends Component {

  render() {
    return (
      <Fragment>
        <ButtonCSS />
        <ButtonStyled speed="0.1s" />
      </Fragment>
    )
  }
}

export default LiveCodingPage