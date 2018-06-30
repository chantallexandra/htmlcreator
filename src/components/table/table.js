import React, { Component } from 'react';
import Scroll from '../Scroll';
import Size from './sizeselector';
import './table.css';

class Table extends Component {

	constructor(){
		super();
		this.state = {
			rows: 3,
			cols: 2
		}
	}

	changeTable(e){
		var eId = (e.target.id).substring(3);
		document.getElementById(`out-${eId}`).innerHTML = `&lt;td&gt;<span class='writing'>${e.target.value}</span>&lt;&#47;td&gt;`

	}

	createTable = (col, row) => {
		let t = []
		let tbody = []
	    let table = []

	    // Outer loop to create parent
	    for (let i = 0; i < row; i++) {
	      let children = []
	      //Inner loop to create children
	      for (let j = 0; j < col; j++) {
	      	if(i === 0){
	      		//head
	      		children.push(<td key={`in-${i}-${j}`} className='thead'><input id={`in-${i}-${j}`} type='text' onInput={this.changeTable}/></td>)
	      	}else{
	      		children.push(<td key={`in-${i}-${j}`}><input type="text" id={`in-${i}-${j}`} onInput={this.changeTable}/></td>)
	      	} 
	      }
	      //Create the parent and add the children
	      if(i === 0){
	      	table.push(<tr key={`in-${i}`} className='center'>{children}</tr>)
	      }else{
	      	table.push(<tr key={`in-${i}`} className='center'>{children}</tr>)
	      }
	      
	    }
	    tbody.push(<tbody key='tbody'>{table}</tbody>)
	    t.push(<table key='table'>{tbody}</table>)
	    return t
  	}

	  createTablehtml = (col, row) => {

	  	let table =[]
	  	for (let i = 0; i < row; i++) {
	  		let children = []
	  		
	      for (let j = 0; j < col; j++) {
	      	var inp = document.getElementById(`in-${i}-${j}`);
	      	var x = inp !== null ? inp.value : "";
	        children.push(<div className='p15' id={`out-${i}-${j}`} key={`out-${i}-${j}`}>&lt;td&gt;<span className='writing'>{x}</span>&lt;&#47;td&gt;</div>)
	        
	      }
	      if(i === 0){
			table.push(<div className='p15' key={`out-${i}`}>&lt;thead&gt;<div className='p15'>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div>&lt;&#47;thead&gt;</div>)
	      }else if(i === 1){
	      	table.push(<div className='p15' key={`out-${i}`}>&lt;tbody&gt;<div className='p15'>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div></div>)
	      }else{
	      	table.push(<div className='p30' key={`out-${i}`}>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div>)
	      }
	     	
	    }
	    table.push(<div className='p15' key={`out`}>&lt;&#47;tbody&gt;</div>)
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

	clickSize = (e) => {
	 	var height = (String(e.target.id)).substring(5,6)
		var width = (String(e.target.id)).substring(3,4)
		this.setState({rows: Number(width) + 1, cols: Number(height) + 1})
	 }

	render(){
	
		return(
			<div>
				<div className='center'>
					<p>Size:<input id="rowsInput" type="text" placeholder="Rows"/> x<input id="colsInput" type="text" placeholder="Cols"/> 
					<button onClick={this.adjustSize}>Set</button></p>
					<Size tableChoose={this.clickSize} className='on-top'/>
				</div>	
				<div className='center'>
					<button onClick={this.addRow}>Add Row</button><button onClick={this.addCol}>Add Column</button>
				</div>
				<div className = 'center'>
					<Scroll>
						<div className='center'>
							{this.createTable(this.state.cols, this.state.rows)}
						</div>
					</Scroll>
					<Scroll>
						<div className='code'>
							<div>
								&lt;table&gt;
							</div>
								{this.createTablehtml(this.state.cols, this.state.rows)}
							<div>
								&lt;&#47;table&gt;
							</div>
						</div>
					</Scroll>
				</div>
			</div>
		)
		
	}
}

export default Table;