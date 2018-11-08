import styled from 'styled-components'

const Link = styled.a`
  color: ${({ theme }) => theme.components.link.color};
  margin-top: ${({ mt, theme }) => theme.spaces[mt] || theme.spaces.s4};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb] || theme.spaces.s4};
  margin-right: ${({ mr, theme }) => theme.spaces[mr]};
  margin-left: ${({ ml, theme }) => theme.spaces[ml]};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.components.link.onHoverColor};
  }
`

export default Link
