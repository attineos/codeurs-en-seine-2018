import React, { Component } from 'react';
import "./style.css";



class ButtonCSS extends Component {
    render() {
        return (
            <button className="Button" onClick={this.props.onClick} >
                <p style={{"animation-duration": this.props.speed}}>Text</p>
            </button>
        )
    } 

}


export default ButtonCSS;
