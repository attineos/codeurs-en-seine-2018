import React from 'react'
import './style.css'

const ButtonCSS = ({ onClick, speed }) => (
  <button className="Button" type="button" onClick={onClick} data-speed={speed}>
    <span style={{ animationDuration: speed }}>Text</span>
  </button>
)

export default ButtonCSS
