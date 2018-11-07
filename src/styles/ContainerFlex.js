import styled from 'styled-components'

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => fd || null};
  justify-content: ${({ jc }) => jc || null};
  align-items: ${({ ai }) => ai || null};

  margin-top: ${({ mt, theme }) => theme.spaces[mt]};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb]};
  margin-right: ${({ mr, theme }) => theme.spaces[mr]};
  margin-left: ${({ ml, theme }) => theme.spaces[ml]};

  background-color: ${({ bc, theme }) => theme.colors[bc] || theme.colors['transparent']};

  width: ${({ w, theme }) => theme.sizes.height[w] || '100%'};
  height: ${({ h, theme }) => theme.sizes.height[h] || '100%'};
`

export default ContainerFlex
