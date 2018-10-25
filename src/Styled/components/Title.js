import styled from 'styled-components'

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  font-size: 70px; // 51px;
  line-height: 70px;
  font-family: 'Oswald', sans-serif;
  margin-top: ${({ mt }) => mt || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};
  color: ${({ col }) => col || 'white'};
`

export default Title