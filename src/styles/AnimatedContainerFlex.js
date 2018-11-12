import styled, { keyframes } from 'styled-components'

import ContainerFlex from './ContainerFlex'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const AnimatedContainerFlex = styled(ContainerFlex)`
  animation: ${fade} 1s;
`

export default AnimatedContainerFlex
