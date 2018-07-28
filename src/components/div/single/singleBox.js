import React, { Component } from 'react';
import SingleCSS from './singleCSS'
import SingleHTML from './singleHTML'

class SingleBox extends Component {
	constructor(){
		super();
		this.state = {
			valign: 'flex-start',
			halign: 'flex-start',
			display: 'css'
		}
	}

	realign = (e) =>{
		let align = e.target.id;
		if(align.substring(0,1) === 'v'){
			document.getElementById(`v-${this.state.valign}`).style.borderColor = '#dbdbdb'
			this.setState({valign: align.substring(2)})
		}else{
			document.getElementById(`h-${this.state.halign}`).style.borderColor = '#dbdbdb'
			this.setState({halign: align.substring(2)})
		}
		document.getElementById(align).style.borderColor = 'rgb(253, 204, 155)'
	}

	changeDisplay = () =>{
		this.state.display === 'css' ? this.setState({display: 'html'}) : this.setState({display : 'css'})
	}

	componentDidMount(){
		document.getElementById(`v-${this.state.valign}`).style.borderColor = 'rgb(253, 204, 155)'
		document.getElementById(`h-${this.state.halign}`).style.borderColor = 'rgb(253, 204, 155)'
	}


	render(){

		if(this.state.display === 'css'){
			var show = <SingleCSS doubleClick={this.changeDisplay}>
							justify-content: <span className='writing'>{this.state.halign};</span> <br />
							align-items: <span className='writing'>{this.state.valign};</span>
						</SingleCSS>
						
		} else{
			var show = <SingleHTML doubleClick={this.changeDisplay}/>
		}
				

		return (
			<div>
				<div className='center'>
					<p id='para-inline'>Horizontal:</p><button id='h-flex-start' onClick={this.realign}>Left</button><button id='h-center' onClick={this.realign}>Middle</button><button id='h-flex-end' onClick={this.realign}>Right</button>
				</div>
				<div className='center'>
					<p id='para-inline'>Vertical:</p><button id='v-flex-start' onClick={this.realign}>Top</button><button id='v-center' onClick={this.realign}>Middle</button><button id='v-flex-end' onClick={this.realign}>Bottom</button>
				</div>
				<div className = 'center'>
					<div className = 'wrapper' style={{justifyContent: this.state.halign, alignItems: this.state.valign}}>
						<div id='inside'><p>1</p></div>
					</div>
					{show}
				</div>
			</div>


		)
	}
}


export default SingleBox;
