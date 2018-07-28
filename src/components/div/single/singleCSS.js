import Scroll from '../../Scroll.js'
import React from 'react';
import '../div.css';

const SingleCSS = (props) => {
	return(
		<Scroll>
			<div className='code' onDoubleClick={props.doubleClick}>
				<div className='message-box'>
					<p>Double click to view HTML</p>
				</div>
				<div>
					.wrapper&#123;
					<div className='p15'>
						width: <span className='writing'>600px;</span> <br />
						height: <span className='writing'>420px;</span> <br />
						display: <span className='writing'>flex;</span> <br />
						{props.children}
					</div>
					&#125;<br />
					.inside&#123;
					<div className='p15'>
						width: <span className='writing'>60px;</span> <br />
						height: <span className='writing'>60px;</span> <br />
						background-color: <span className='writing'>rgb(253, 204, 155);</span>
					</div>
					&#125;

				</div>

			</div>
		</Scroll>

	)
}

export default SingleCSS