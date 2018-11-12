import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: ${({ theme }) => theme.spaces.s5 || '10px'}
  background: ${({ theme }) =>
    theme.components.page ? theme.components.page.background : 'white'};
`

export default Container
