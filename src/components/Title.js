import styled from 'styled-components'

const Title = styled.h1`
  font-weight: ${({theme}) => theme.fonts.fontWeight.fw400};
  text-align: center;
  font-size: ${({theme}) => theme.fonts.fontSize.fs70};
  line-height: ${({theme}) => theme.fonts.lineHeight.lh70};
  font-family: ${({theme}) => theme.fonts.fontFamily.oswald};
  margin-top: ${({ mt }) => mt || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  color: ${({ col }) => col || 'white'};
`

export default Title