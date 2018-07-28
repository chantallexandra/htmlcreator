import React from 'react';

const ColorPicker = ({color, setColor}) => {
	return(
		<div>
			<input type="color" onChange={setColor} value={color}/>
		</div>
	)

}

export default ColorPicker;