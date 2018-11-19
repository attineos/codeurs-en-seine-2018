import styled from 'styled-components'

import Cell from './Cell'
import SubTitle from './SubTitle'

const Row = styled.tr`
  height: ${({ theme }) => theme.sizes.heights.h150};

  ${Cell}:first-child {
    text-align: left;
    ${SubTitle} {
      text-align: left;
    }
  }

  ${Cell}:last-child {
    text-align: right;
  }

  ${Cell}:not (:first-child):not(:last-child) {
    padding: ${({ theme }) => theme.spaces.s14};
  }
`

export default Row
