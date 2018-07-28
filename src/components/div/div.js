import React, { Component } from 'react';
import SingleBox from './single/singleBox';
import MultiBox from './multi/multiBox';

import './div.css';

class Div extends Component {
	constructor(){
		super();
		this.state = {
			display: 'single'
		}
	}

	
	changeNum = (e) => {
		this.setState({display: e.target.value})
	}

	render(){
		var show = this.state.display === 'single' ? <SingleBox /> : <MultiBox />

		return(
			<div>
				<div className='center radio-buttons'>
					<input type='radio' name='number' value='single' onClick={this.changeNum} defaultChecked/>Single
					<input type='radio' name='number' value='multiple' onClick={this.changeNum}/>Multiple
				</div>
				{show}
			</div>
		)
	
	}



}

export default Div;