import React, { Component } from 'react';
import './table.css';

class Table extends Component {

	constructor(){
		super();
		this.state = {
			rows: 3,
			cols: 2
		}
	}

	createTable = (col, row) => {
	    let table = []

	    // Outer loop to create parent
	    for (let i = 0; i < row; i++) {
	      let children = []
	      //Inner loop to create children
	      for (let j = 0; j < col; j++) {
	      	if(i === 0){
	      		//head
	      		children.push(<td key={(i+1)*(j+1)} className='thead'><input id={`in-${(i+1)*(j+1)}`} type='text'/></td>)
	      	}else{
	      		children.push(<td key={(i+1)*(j+1)}><input type="text"/></td>)
	      	} 
	      }
	      //Create the parent and add the children
	      table.push(<tr key={(i*100)} className='center'>{children}</tr>)
	    }
	    return table
  }

	  createTablehtml = (col, row) => {
	  	let table =[]
	  	for (let i = 0; i < col; i++) {
	  		let children = []
	  		
	      for (let j = 0; j < row; j++) {
	        children.push(<div>&lt;td&gt;&lt;&#47;td&gt;</div>)
	      }
	     	table.push(<div>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div>)
	    }
	    return table

	  }

	  addRow = () => {
	  	this.setState({rows: this.state.rows + 1})
	  }

	  addCol = () => {
	  	this.setState({cols: this.state.cols + 1})
	  }

	 adjustSize = () => {
	 	var c = Number(document.getElementById("colsInput").value);
	 	var r = Number(document.getElementById("rowsInput").value);
	 	this.setState({rows: r, cols: c})
	 }

	render(){
	
		return(
			<div>
				<div className='center'>
					<p>Size:<input id="rowsInput" type="text" placeholder="Rows"/> x<input id="colsInput" type="text" placeholder="Cols"/> <button onClick={this.adjustSize}>Set</button></p>
				</div>	
				<div className='center'>
					<button onClick={this.addRow}>Add Row</button><button onClick={this.addCol}>Add Column</button>
				</div>
				<div>
						{this.createTable(this.state.cols, this.state.rows)}
				</div>
				<div>
					<div>
						&lt;table&gt;
					</div>
						{this.createTablehtml(this.state.cols, this.state.rows)}
					<div>
						&lt;&#47;table&gt;
					</div>
				</div>
			</div>
		)
		
	}
}

export default Table;