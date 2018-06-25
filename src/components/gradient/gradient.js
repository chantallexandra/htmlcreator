import React, { Component } from 'react';
import ColorPicker from './colorpicker';
import Display from './display';
import './gradient.css';

class Gradient extends Component {
	constructor(){
		super();
		this.state = {
			color1: '#ff8080',
			color2: '#ffbd60'
		}
	}


	setColor1 = (e) =>{
		this.setState({color1: e.target.value});

	}

	setColor2 = (e) =>{
		this.setState({color2: e.target.value});
	}

	render(){
		return(
			<div className='grad'>
				<div className='center c-input'>
					<ColorPicker color={this.state.color1} setColor={this.setColor1}/>
					<ColorPicker color={this.state.color2} setColor={this.setColor2}/>
				</div>
				<div className='center'>
					<Display col1={this.state.color1} col2={this.state.color2}/>
				</div>
				<div className='center'>
					<p>{`background: linear-gradient(to right, ${this.state.color1}, ${this.state.color2});`}</p>
				</div>
			</div>
		)
	}

}

export default Gradient;