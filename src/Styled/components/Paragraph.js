import styled from 'styled-components'

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 25px;
  font-family: 'Lato', sans-serif;
  margin-top: ${({ mt }) => mt || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  color: ${({ col }) => col || 'white'};
`

export default Paragraph