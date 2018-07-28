import './Scroll.css';
import React from 'react';


const Scroll = (props) => {
	// props.children is the elements within the scroll tag
	return(
		<div id='scroll'> 
			{props.children}
		</div>
	);
};

export default Scroll;