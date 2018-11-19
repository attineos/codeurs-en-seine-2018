import styled from 'styled-components'

const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw400};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs25};
  font-family: ${({ theme }) => theme.fonts.fontFamily.lato};
  text-align: center;

  color: ${({ color, theme }) => theme.colors[color] || theme.components.title.color};

  margin-top: ${({ mt, theme }) => theme.spaces[mt] || theme.spaces.s4};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb] || theme.spaces.s4};
  margin-right: ${({ mr, theme }) => theme.spaces[mr] || mr};
  margin-left: ${({ ml, theme }) => theme.spaces[ml] || ml};
`

export default Paragraph
