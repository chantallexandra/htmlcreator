import React from 'react';
import './icon.css';

const Icon = ({id, imgSrc, direction}) => {
	return(
		<div className='icon-holder'>
			<img id={id} src={imgSrc} className='icon' onClick={direction} alt={`gradient to ${id}`}/>
		</div>
	)
}

export default Icon;