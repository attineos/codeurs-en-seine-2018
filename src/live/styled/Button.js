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

const Button = props => props.children

export default Button
/* eslint-enable */
