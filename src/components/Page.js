import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${({ theme }) => theme.components.page.background};
`

export default Page
