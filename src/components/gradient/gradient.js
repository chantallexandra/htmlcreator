import React, { Component } from 'react';
import ColorPicker from './colorpicker';
import Display from './display';
import Icon from './icon';
import './gradient.css';
import Up from './svgs/up.svg';
import Down from './svgs/down.svg';
import Left from './svgs/left.svg';
import Right from './svgs/right.svg';


class Gradient extends Component {
	constructor(){
		super();
		this.state = {
			color1: '#ff8080',
			color2: '#ffbd60',
			direction: 'right'
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

	render(){
		return(
			<div className='grad'>
				<div className='icon-bar'>
					<div className='center c-input'>
						<ColorPicker color={this.state.color1} setColor={this.setColor1}/>
						<ColorPicker color={this.state.color2} setColor={this.setColor2}/>
					</div>
					<div className='center'>
						<Icon id={'top'} imgSrc={Up} direction={this.changeDirection}/>
						<Icon id={'bottom'} imgSrc={Down} direction={this.changeDirection}/>
						<Icon id={'left'} imgSrc={Left} direction={this.changeDirection}/>
						<Icon id={'right'} imgSrc={Right} direction={this.changeDirection}/>
					</div>
				</div>
				<div className='center'>
					<Display col1={this.state.color1} col2={this.state.color2} direction={this.state.direction}/>
				</div>
				<div className='center'>
					<p>{`background: linear-gradient(to ${this.state.direction}, ${this.state.color1}, ${this.state.color2});`}</p>
				</div>
			</div>
		)
	}

}

export default Gradient;