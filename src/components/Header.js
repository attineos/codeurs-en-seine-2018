import styled from 'styled-components'

const Headers = styled.header`
  background-color: ${({ theme }) => theme.components.header.background};
  min-height: 4vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.components.header.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.s6};
`

export default Headers
