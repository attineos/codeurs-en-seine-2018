import styled, { keyframes } from 'styled-components'
import React from 'react'
import { colors as c } from '../../variables'

// Given a specific speed, returns its associated background colors
const SPEED_TO_COLOR = {
  '1s': {
    background: c.red,
    backgroundHover: c.lightRed,
  },
  '2s': {
    background: c.orange,
    backgroundHover: c.lightOrange,
  },
  '3s': {
    background: c.green,
    backgroundHover: c.lightGreen,
  },
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Content = styled.div`
  animation: ${rotate} linear infinite ${props => props.speed};
`

const Button = styled.button.attrs({
  colors: props => SPEED_TO_COLOR[props.speed],
  children: props => (
    <Content speed={props.speed}>
      <img alt="icon" width={100} height={100} src={props.theme.button.icon} />
    </Content>
  ),
})`
  background: ${props => props.theme.button[props.speed].background};
  color: ${props => props.theme.button.color};
  font-size: 50px;
  padding: 25px;

  &:hover {
    background: ${props => props.theme.button[props.speed].backgroundHover};
  }
`

export default Button
