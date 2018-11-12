import React from 'react'
import './style.css'

const ButtonCSS = ({ onClick, speed }) => (
  <button className="Button" type="button" onClick={onClick} data-speed={speed}>
    <div style={{ animationDuration: speed }}>Text</div>
  </button>
)

export default ButtonCSS
