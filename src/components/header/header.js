import React from 'react';
import monitor from './monitor.svg'
import './header.css'

const Header = (props) => {

	return(
		<div className='center header'>
			<img src={monitor} className='header-svg' alt='Computer'/>
		</div>
	)
}



export default Header;