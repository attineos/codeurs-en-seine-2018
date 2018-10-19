import styled from 'styled-components'

const Paragraph = styled.p`
  font-weight: ${({theme}) => theme.fonts.fontWeight.fw400};
  font-size: ${({theme}) => theme.fonts.fontSize.fs25};
  text-align: center;
  font-family: ${({theme}) => theme.fonts.fontFamily.lato};
  margin-top: ${({ mt }) => mt || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  color: ${({ col }) => col || 'white'};
`

export default Paragraph