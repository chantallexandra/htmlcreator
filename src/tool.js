import React from 'react';
import Gradient from './components/gradient/gradient';
import Table from './components/table/table';
import Div from './components/div/div';


const tool = {
	default : <p></p>,
	gradient : <Gradient />,
	table : <Table />,
	div : <Div />
}

export default tool;