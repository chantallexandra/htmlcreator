import React, { Component } from 'react';
import ColorPicker from './colorpicker';
import Display from './display';
import './gradient.css';
import Scroll from '../Scroll.js'


class Gradient extends Component {
	constructor(){
		super();
		this.state = {
			color1: '#ff8080',
			color2: '#ffbd60',
			direction: 180
		}
	}

	setColor1 = (e) =>{
		this.setState({color1: e.target.value});

	}

	setColor2 = (e) =>{
		this.setState({color2: e.target.value});
	}

	changeDirection = (e) =>{
		this.setState({direction: e.target.id});
	}

	changeRange = (e) =>{
		this.setState({direction: e.target.value})
	}


	render(){
		return(
			<div className='grad'>
				<div>
					<div className='center c-input'>
						<ColorPicker color={this.state.color1} setColor={this.setColor1}/>
						<ColorPicker color={this.state.color2} setColor={this.setColor2}/>
					</div>
					<div className='center'>
						<input type="range" name='rangeslider' min="0" max="360" onInput={this.changeRange} defaultValue="180"/>

					</div>
				</div>

				<div className='center'>
					<div className="center w600">
						<Display col1={this.state.color1} col2={this.state.color2} direction={this.state.direction} style={{width:"610px"}}/>
					</div>
					<Scroll>
					<div className='code'>
						<div>
							body&#123;
						<div className='p15'>
							background:<span className='writing'>{`linear-gradient(${this.state.direction}deg, ${this.state.color1}, ${this.state.color2});`}</span>
						</div>
							&#125;
						</div>
					</div>
					</Scroll>
				</div>
			</div>
		)
	}

}

export default Gradient;