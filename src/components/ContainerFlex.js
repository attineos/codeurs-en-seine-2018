import styled from 'styled-components'

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => fd || null};
  justify-content: ${({ jc }) => jc || null};
  align-items: ${({ ai }) => ai || null};
  margin-top: ${({ mt }) => mt || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  background-color: ${({ bc }) => bc || 'transparent'};
  color: ${({ col }) => col || 'white'};
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
`

export default ContainerFlex
