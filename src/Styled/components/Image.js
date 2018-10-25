import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${({ mode }) => mode === "rotate" && rotate360} infinite ${({ speed }) => speed} linear;
  height: ${({ h }) => h || '4vmin'};
  margin-top: ${({ mt }) => mt || null};
  margin-bottom: ${({ mb }) => mb || null};
  background-color:${({ bgC }) => bgC || null};
`

Image.defaultProps = {
  mode: 'standard',
  speed: '20s',
}

export default Image