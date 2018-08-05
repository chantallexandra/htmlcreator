import React from 'react';
import './selection.css';

const Selection = ({select}) => {

	return(
		<div className='center selection-bar header'>
			<p className="para-inline">I want to create...</p>
			<select onChange={select}>
				<option value="default"></option>
				<option value="gradient">Background Gradient</option>
				<option value="table">Table</option>
				<option value="div">Aligned Content</option>
			</select>
		</div>
	)
}



export default Selection;