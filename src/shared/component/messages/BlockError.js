import React from 'react';
import PropTypes from 'prop-types';

const BlockError = ({text}) =>(
	<p style={{color:"#ae5856"}}>
		{ text }
	</p>
);

BlockError.propTypes = {
	text: PropTypes.string.isRequired
};

export default BlockError;