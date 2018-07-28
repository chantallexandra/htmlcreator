import React, { Component } from 'react';
import './size.css';


class Size extends Component{

	constructor(props){
		super(props);
		// this.tableChoose = this.tableChoose.bind(this);
		this.state = {
			rows: 3,
			cols: 3,
			max: 10,
			min: 3

		}
		
	}

	tableHover = (e) => {
		var x = document.getElementById(e.target.id)
		var height = Number((String(e.target.id)).substring(9,10)) + 1
		var width = Number((String(e.target.id)).substring(7,8)) + 1
		x.style.backgroundColor = 'grey';
		for(let i = 0; i < width; i++){
			for(let j = 0; j < height; j++){
				document.getElementById(`select-${i}-${j}`).style.backgroundColor = '#91bbff';
			}	
		}
		if(height < this.state.max){
			this.setState({cols: height + 1})
		} 
		if(height < this.state.min){
			this.setState({cols: this.state.min})
		}
		if(width < this.state.max){
			this.setState({rows: width + 1})
		}
		if(width < this.state.min){
			this.setState({rows: this.state.min})
		}
	}

	tableLeave = (e) => {
		var x = document.getElementById(e.target.id)
		var height = (String(e.target.id)).substring(9,10)
		var width = (String(e.target.id)).substring(7,8)
		x.style.backgroundColor = 'white';
		for(let i = 0; i <= width; i++){
			for(let j = 0; j <= height; j++){
				document.getElementById(`select-${i}-${j}`).style.backgroundColor = 'white';
			}	
		}
	}


	createTable = (col, row) => {
		let t2 = []
	    let table2 = []

	    // Outer loop to create parent
	    for (let i = 0; i < row; i++) {
	      let children2 = []
	      //Inner loop to create children
	      for (let j = 0; j < col; j++) {
	      	children2.push(<td key={`select-${i}-${j}`} onMouseOver={this.tableHover} onMouseOut={this.tableLeave} onClick={this.props.tableChoose} id={`select-${i}-${j}`}></td>)

	      }
	      //Create the parent and add the children
	      table2.push(<tr key={`select-${i}`}>{children2}</tr>)
	      
	      
	    }
	    t2.push(<table key='table' className='selector' ><tbody>{table2}</tbody></table>)
	    return t2
  		}

	render(){

		return(
			<div>
				{this.createTable(this.state.cols, this.state.rows)}
			</div>
		)
	}
}

export default Size;