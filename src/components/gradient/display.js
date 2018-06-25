import React from 'react';
import './display.css';

const Display = ({col1, col2}) => {
	return(
		<div id="colorBackground" style={{ background: `linear-gradient(to right, ${col1}, ${col2})`}}>

		</div>
	)

}

export default Display;
// 