import React from 'react'
import Container from './Container'
import Title from './Title'
import Button from './Button'

/* eslint-disable */
import { ThemeProvider } from 'styled-components'
import { cesTheme, darKnightTheme } from '../themes'
/* eslint-enable */

const Presentation = ({ onClick, speed }) => (
  <Container>
    <Title>Button Styled Component</Title>
    <Button onClick={onClick} speed={speed}>
      TODO
    </Button>
  </Container>
)

export default Presentation
