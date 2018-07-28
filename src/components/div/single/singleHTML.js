import Scroll from '../../Scroll.js'
import React from 'react';
import '../div.css'

const SingleHTML = (props) => {
	return(
		<Scroll>
			<div className='code' onDoubleClick={props.doubleClick}>
				<div className='message-box'>
					<p>Double click to view CSS</p>
				</div>
				<div>
					&lt;div class='wrapper'&gt;
				</div>
				<div className='p15'>
					&lt;div class='inside'&gt;<span className='writing'>1</span>&lt;&#47;div&gt;
				</div>
				<div>
					&lt;&#47;div&gt;
				</div>
			</div>
		</Scroll>

	)
}

export default SingleHTML