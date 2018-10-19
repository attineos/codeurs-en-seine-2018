import styled, { keyframes } from "styled-components"
import React from 'react';
  
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  display: inline-block;
  animation: ${rotate360} ${({speed}) => speed} linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

Icon.defaultProps = {
  children: "Hello from CES !",
  speed: "2s"
}


const Button = styled.button.attrs({children:props => <Icon speed={props.speed} />})`
  color: white;
  font-size: 50px;
  background: blue;
  padding: 50px;
`
export default Button;