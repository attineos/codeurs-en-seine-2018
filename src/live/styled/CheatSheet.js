/* eslint-disable */
import React from 'react'
import styled, { keyframes } from 'styled-components'
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

const Content = styled.span`
  display: block;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url(${props => props.theme.button.icon});
  animation: ${rotate} linear infinite ${props => props.speed};
`

const Button = styled.button.attrs({
  children: (props) => <Content speed={props.speed} />
})`
  color: ${props => props.theme.button.color};
  font-size: 50px;
  padding: 25px;
  
  background: ${props => props.theme.button[props.speed].background};
  
  &:hover {
    background: ${props => props.theme.button[props.speed].backgroundHover}
  }
`

export default Button
/* eslint-enable */
