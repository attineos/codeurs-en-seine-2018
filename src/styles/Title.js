import styled from 'styled-components'

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.fontFamily.oswald};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw400};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs71};
  text-align: center;

  color: ${({ color, theme }) => theme.colors[color] || theme.components.title.color};

  margin-top: ${({ mt, theme }) => theme.spaces[mt] || theme.spaces.s11};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb] || theme.spaces.s11};
  margin-right: ${({ mr, theme }) => theme.spaces[mr] || mr};
  margin-left: ${({ ml, theme }) => theme.spaces[ml] || ml};

  transform: ${({ flip }) => (flip ? 'scale(-1, -1)' : null)};
`

export default Title
