import styled from 'styled-components'

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => fd};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};

  margin-top: ${({ mt, theme }) => theme.spaces[mt] || mt};
  margin-bottom: ${({ mb, theme }) => theme.spaces[mb] || mb};
  margin-right: ${({ mr, theme }) => theme.spaces[mr] || mr};
  margin-left: ${({ ml, theme }) => theme.spaces[ml] || ml};

  background-color: ${({ bc, theme }) => theme.colors[bc] || theme.colors['transparent']};

  width: ${({ w, theme }) => theme.sizes.widths[w] || '100%'};
  height: ${({ h, theme }) => theme.sizes.heights[h] || '100%'};
`

export default ContainerFlex
