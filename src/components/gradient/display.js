import React from 'react';
import './display.css';

const Display = ({col1, col2, direction}) => {
	return(
		<div id="colorBackground" style={{ background: `linear-gradient(${direction}deg, ${col1}, ${col2})`}}>

		</div>
	)

}

export default Display;
// 