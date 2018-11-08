import styled from 'styled-components'

const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.oswald};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lh50};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw400};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs35};
  text-align: center;

  color: ${({ color, theme }) => theme.colors[color] || theme.components.title.color};

  margin-top: ${({ mt, theme }) => theme.spaces[mt] || theme.spaces.s6};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb] || theme.spaces.s6};
  margin-right: ${({ mr, theme }) => theme.spaces[mr]};
  margin-left: ${({ ml, theme }) => theme.spaces[ml]};
`

export default SubTitle
