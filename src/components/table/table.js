import React, { Component } from 'react';
import Scroll from '../Scroll';
import Size from './sizeselector';
import './table.css';

class Table extends Component {

	constructor(){
		super();
		this.state = {
			rows: 3,
			cols: 2,
			minInputPix: 80,
			maxInputPix: 120,
			headers: [80,80]
		}
	}

	changeTable = (e) =>{
		var eId = (e.target.id).substring(3);
		document.getElementById(`out-${eId}`).innerHTML = `&lt;td&gt;<span class='writing'>${e.target.value}</span>&lt;&#47;td&gt;`
		var col = Number(e.target.id.substring(5))
		var row = 0
		var rows = this.state.rows
		var maxPix = this.state.maxInputPix
		var minPix = this.state.minInputPix
		// Assuming each char takes about 12 pixels
		let pix = e.target.value.length * 12 
		//Checking if new size is larger than only size
		if( pix > minPix ){
			var header = Number((document.getElementById(`in-0-${col}`).style.width).replace("px",""))
			var lrg = pix > header ? pix : header
			var width = lrg < maxPix ? lrg : maxPix
			//Change width in header array
			let arryCopy = [...this.state.headers]
		  	arryCopy[col] = width
		  	this.setState({headers: arryCopy});
		}

		while(row < rows){
			document.getElementById(`in-${row}-${col}`).style.width = `${width}px`
			row ++
		}

	}

	deleteTable = (e) =>{
		let d = document.getElementById('delBox')
		d.style.visibility = "visible"
		d.style.left = e.pageX+'px'
		d.style.top = e.pageY+'px'
		d.focus()
	}

	deleteDisable = () =>{
		let d = document.getElementById('delBox')
		d.style.visibility = "hidden"
	}

	createTable = (col, row) => {
		let t = []
		let tbody = []
	    let table = []

	    const headers = this.state.headers

	    // Outer loop to create parent
	    for (let i = 0; i < row; i++) {
	      let children = []
	      //Inner loop to create children

	      for (let j = 0; j < col; j++) {
	      	if(i === 0){
	      		children.push(<td key={`in-${i}-${j}`} className='thead'><input id={`in-${i}-${j}`} type='text' style={{width: `${headers[j]}px`}} onDoubleClick={this.deleteTable} onInput={this.changeTable}/></td>)
	      	}else{
	      		children.push(<td key={`in-${i}-${j}`}><input type="text" id={`in-${i}-${j}`}  style={{width: `${headers[j]}px`}} onDoubleClick={this.deleteTable} onInput={this.changeTable}/></td>)
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
	      	if (i == 0){
	      		children.push(<div className='p15' id={`out-${i}-${j}`} key={`out-${i}-${j}`}>&lt;th&gt;<span className='writing'>{x}</span>&lt;&#47;th&gt;</div>)
	      	}
	      	else{
	        	children.push(<div className='p15' id={`out-${i}-${j}`} key={`out-${i}-${j}`}>&lt;td&gt;<span className='writing'>{x}</span>&lt;&#47;td&gt;</div>)
	      	}
	        
	      }
	      if(i === 0){
			table.push(<div className='p15' key={`out-${i}`}>&lt;thead&gt;<div className='p15'>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div>&lt;&#47;thead&gt;</div>)
	      }else if(i === 1){
	      	table.push(<div className='p15' key={`out-${i}`}>&lt;tbody&gt;<div className='p15'>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div></div>)
	      }else{
	      	table.push(<div className='p30' key={`out-${i}`}>&lt;tr&gt;{children}&lt;&#47;tr&gt;</div>)
	      }
	     	
	    }
	    if(row > 1){ //there needs to be atleast one row other than the head to have a body
	    	table.push(<div className='p15' key={`out`}>&lt;&#47;tbody&gt;</div>)
	    }

	    return table

	  }

	  addRow = () => {
	  	this.setState((prevState, props) => ({
		  rows: prevState.rows + 1
		}));
	  	//this.setState({rows: this.state.rows + 1})
	  }

	  addCol = () => {
	  	let arryCopy = [...this.state.headers]
	  	arryCopy.push(80)
	  	this.setState((prevState, props) => ({
		  cols: prevState.cols + 1,
		  headers: arryCopy
		}));
	  }

	  delRow = () =>{
	  	this.setState((prevState, props) => ({
		  rows: prevState.rows > 1 ? prevState.rows - 1 : 1
		}));
	  }

	  delCol = () => {
	    let arryCopy = [...this.state.headers]
	    if(this.state.cols){
			arryCopy.pop()
	    }
	  	this.setState((prevState, props) => ({
		  cols: prevState.cols > 1 ? prevState.cols - 1 : 1,
		  headers: arryCopy
		}));
	  }

	 adjustSize = (e) => {
	 	if(e.keyCode === 13){
		 	var colVal = document.getElementById("colsInput").value
		 	var rowVal = document.getElementById("rowsInput").value
		 	//If there is a number entered, check that it is greater than 1
		 	this.setSize(colVal, rowVal)
	 	}
	 }

	clickSize = (e) => {
		var colVal = parseInt((String(e.target.id)).substring(9,10), 10) + 1
		var rowVal = parseInt((String(e.target.id)).substring(7,8), 10) + 1
		// this.setState({rows: Number(width) + 1, cols: Number(height) + 1})
		this.setSize(colVal, rowVal)

	 }

	 setSize = (colVal, rowVal) => {
	 	colVal = parseInt(colVal, 10)
	 	rowVal = parseInt(rowVal, 10)
 		if(!isNaN(colVal) && colVal !== ''){
	 		var c = colVal < 1 ? 1 : colVal;	
	 		let arryCopy = [...this.state.headers]
	 		if(c < arryCopy.length){
	 			arryCopy.length = c
	 		}else{
	 			while(c < arryCopy.length){
	 				arryCopy.push(80)
	 			}
	 		}
	 		this.setState({cols: c, headers: arryCopy})

	 	}
	 	if(!isNaN(rowVal) && rowVal !== ''){
	 		var r = rowVal < 1 ? 1 : rowVal;	
	 		this.setState({rows: r})
	 	}
	 }

	 componentDidMount(){
	 	document.addEventListener("keydown", this.adjustSize, false)
	 }

	 componentWillUnmount(){
	 	document.removeEventListener("keydown", this.adjustSize, false)
	 }

	render(){
	
		return(
			<div>
				<div className='center'>
					<p>Size:<input id="rowsInput" type="text" placeholder="Rows"/> x<input id="colsInput" type="text" placeholder="Cols"/> 
					</p>

				</div>	
				<div className='center' style={{height: "67px"}}>
					<div className='on-top'>
						<Size tableChoose={this.clickSize} className='on-top'/>
					</div>
				</div>

				<div className='center'>
					<button onClick={this.addRow}>Add Row</button><button onClick={this.addCol}>Add Column</button>

				</div>

				<div className = 'center'>
					<Scroll>
						<div className='message-box'>
							<p>Double click table<br /> for delete options</p>
						</div>
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
				{//Div which appears on double click
				}
				<div className="delete-menu" onBlur={this.deleteDisable} id="delBox" tabIndex="1">
					<p className="list-menu" onClick={this.delRow}>Delete Last Row</p>
					<p className="list-menu" onClick={this.delCol}>Delete Last Column</p>
				</div>
			</div>
		)
		
	}
}

export default Table;