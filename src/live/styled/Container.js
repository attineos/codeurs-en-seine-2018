import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${({theme}) => theme.components.page.background}
`

export default Container