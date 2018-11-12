import styled, { keyframes } from 'styled-components'
import React from 'react'

// Given a specific speed, returns its associated background colors
const SPEED_TO_COLOR = {
  '1s': {
    background: 'salmon',
    backgroundHover: 'lightsalmon',
  },
  '2s': {
    background: 'darkorange',
    backgroundHover: 'orange',
  },
  '3s': {
    background: 'limegreen',
    backgroundHover: 'lime',
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
      <img alt="icon" width={100} height={100} src={props.theme.components.button.icon} />
    </Content>
  ),
})`
  background: ${props => props.theme.components.button[props.speed].background};
  color: ${props => props.theme.components.button.color};
  font-size: 50px;
  padding: 25px;

  &:hover {
    background: ${props => props.theme.components.button[props.speed].backgroundHover};
  }
`

export default Button
