import styled from 'styled-components'

const List = styled.ul`
  color: ${({ theme }) => theme.components.list.color};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs35};
  font-family: ${({ theme }) => theme.fonts.fontFamily.lato};

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  margin: 0;
  padding: 0;

  li:nth-child(2n) {
    background-color: ${({ theme }) => theme.components.list.li.evenLine};
  }

  li:nth-child(2n-1) {
    background-color: ${({ theme }) => theme.components.list.li.oddLine};
  }
`

export default List
