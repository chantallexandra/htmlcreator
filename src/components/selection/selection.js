import React from 'react';
import './selection.css';

const Selection = ({select}) => {

	return(
		<div className='center selection-bar'>
			<p className="para-inline">I want to create a...</p>
			<select onChange={select}>
				<option value="default"></option>
				<option value="gradient">Background Gradient</option>
				<option value="table">Table</option>
			</select>
		</div>
	)
}



export default Selection;