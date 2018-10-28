import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const translateAndRotate360 = keyframes`
  from {
    transform: rotate(0deg) translateX(250px) rotate(-210deg);
  }
  to {
    transform: rotate(360deg) translateX(250px) rotate(-210deg);
  }
`

const alienAnimation = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(45deg);
  }
  50% {
    transform: translate(${window.innerWidth - 150}px, ${window.innerHeight - 200}px) rotate(-45deg);
  }
  75% {
    transform: translate(0px, ${window.innerHeight - 150}px) rotate(0deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
`

const verticalFilp = keyframes`
  0%, 100% {
    transform: scale(-1, 1) translate(0px, 0px) rotate(0deg);
  }
  50% {
    transform: scale(-1, 1) translate(-50px, 50px) rotate(-60deg);
  }
`

function getAnimation(mode) {
  switch(mode) {
    case "rotate": return rotate360
    case "spin": return translateAndRotate360
    case "alien": return alienAnimation
    case "verticalFilp": return verticalFilp
    default: return null
  }
}

const Image = styled.img`
  margin-top: ${({ mt }) => mt || null};
  margin-bottom: ${({ mb }) => mb || null};
  background-color:${({ bgC }) => bgC || null};
  position: ${({ position }) => position || null};
  top: ${({ t }) => t || null};
  left: ${({ l }) => l || null};
  right: ${({ r }) => r || null};
  bottom: ${({ b }) => b || null};
  width: ${({ w }) => w || null};
  height: ${({ h }) => h || null};

  animation-name: ${({ mode }) => getAnimation(mode)};
  animation-duration: ${({ speed }) => speed};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

Image.defaultProps = {
  mode: 'standard',
  speed: '20s',
}

export default Image