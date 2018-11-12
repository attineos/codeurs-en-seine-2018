/* eslint-disable */
import React from 'react'
import styled, { keyframes } from 'styled-components'

// Given a specific speed, returns its associated background colors
const SPEED_TO_COLOR = {
  '1s': {
    background: 'salmon',
    backgroundHover: 'red',
  },
  '2s': {
    background: 'darkOrange',
    backgroundHover: 'orange',
  },
  '3s': {
    background: 'limeGreen',
    backgroundHover: 'lime',
  },
}

const Button = props => props.children

export default Button
/* eslint-enable */
