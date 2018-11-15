import styled from 'styled-components'

import Row from './Row'

const List = styled.table`
  color: ${({ theme }) => theme.components.list.color};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs35};
  font-family: ${({ theme }) => theme.fonts.fontFamily.lato};

  ${Row}:nth-child(2n) {
    background-color: ${({ theme }) => theme.components.list.li.evenLine};
  }

  ${Row}:nth-child(2n-1) {
    background-color: ${({ theme }) => theme.components.list.li.oddLine};
  }
`

export default List
