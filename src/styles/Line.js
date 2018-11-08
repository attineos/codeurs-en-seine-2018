import styled from 'styled-components'

const Line = styled.li`
  display: flex;
  height: 100%;
  padding: ${({ theme }) => `${theme.spaces.s8} ${theme.spaces.s12}`};
  max-height: 100px;
`

export default Line
