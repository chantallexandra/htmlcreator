import React, { Component } from 'react';
import MultiCSS from './multiCSS'
import MultiHTML from './multiHTML'
import '../div.css'

class MultiBox extends Component {
	constructor(){
		super();
		this.state = {
			valign: 'flex-start',
			halign: 'flex-start',
			direction: 'row',
			display: 'css'
		}
	}

	realign = (e) =>{
		let align = e.target.id;

		if(align.substring(0,1) === 'v'){
			document.getElementById(`v-${this.state.valign}`).style.borderColor = '#dbdbdb'
			this.setState({valign: align.substring(2)})
		}else if (align.substring(0,1) === 'h'){
			document.getElementById(`h-${this.state.halign}`).style.borderColor = '#dbdbdb'
			this.setState({halign: align.substring(2)})
		}else{
			document.getElementById(`d-${this.state.direction}`).style.borderColor = '#dbdbdb'
			this.setState({direction: align.substring(2)})
		}
		document.getElementById(align).style.borderColor = 'rgb(253, 204, 155)'
	}

	changeDisplay = () =>{
		this.state.display === 'css' ? this.setState({display: 'html'}) : this.setState({display : 'css'})
	}

	componentDidMount(){
		document.getElementById(`v-${this.state.valign}`).style.borderColor = 'rgb(253, 204, 155)'
		document.getElementById(`h-${this.state.halign}`).style.borderColor = 'rgb(253, 204, 155)'
		document.getElementById(`d-${this.state.direction}`).style.borderColor = 'rgb(253, 204, 155)'
	}

	render(){
		if(this.state.display === 'css'){
			var show = <MultiCSS doubleClick={this.changeDisplay}>
							justify-content: <span className='writing'>{this.state.halign};</span> <br />
							align-items: <span className='writing'>{this.state.valign};</span><br />
							flex-direction: <span className='writing'>{this.state.direction}</span>
						</MultiCSS>
						
		} else{
			var show = <MultiHTML doubleClick={this.changeDisplay}/>
		}

		return (
			<div>
				<div className='center'>
					<p id='para-inline'>Horizontal:</p><button id='h-flex-start' onClick={this.realign}>Left</button><button id='h-center' onClick={this.realign}>Middle</button><button id='h-flex-end' onClick={this.realign}>Right</button><button id='h-space-around' onClick={this.realign}>Space Around</button><button id='h-space-between' onClick={this.realign}>Space Between</button><button id='h-space-evenly' onClick={this.realign}>Space Evenly</button>
				</div>
				<div className='center'>
					<p id='para-inline'>Vertical:</p><button id='v-flex-start' onClick={this.realign}>Top</button><button id='v-center' onClick={this.realign}>Middle</button><button id='v-flex-end' onClick={this.realign}>Bottom</button>
				</div>
				<div className='center'>
					<p id='para-inline'>Direction:</p><button id='d-row' onClick={this.realign}>Row</button><button id='d-row-reverse' onClick={this.realign}>Reversed Row</button><button id='d-column' onClick={this.realign}>Column</button><button id='d-column-reverse' style={{width: '120px'}} onClick={this.realign}>Reversed Column</button>
				</div>
				<div className = 'center'>
					<div className = 'wrapper' style={{justifyContent: this.state.halign, alignItems: this.state.valign, flexDirection: this.state.direction}}>
						<div id='inside'><p>1</p></div>
						<div id='inside'><p>2</p></div>
					</div>
					{show}
				</div>
			</div>


		)
	}
}


export default MultiBox;