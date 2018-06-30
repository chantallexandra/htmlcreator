import './Scroll.css';
import React from 'react';


const Scroll = (props) => {
	// props.children is the elements within the scroll tag
	// Must use camelCase for css in JSX
	return(
		<div id='scroll'> 
			{props.children}
		</div>
	);
};

export default Scroll;