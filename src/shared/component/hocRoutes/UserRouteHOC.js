import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const UserRouteHOC = ({isAuthenticated,component:Component,...rest}) =>(
	<Route {...rest} render={props => isAuthenticated? <Component {...props} /> : <Redirect to="/register" />} />
	);

UserRouteHOC.propTypes = {
	component: PropTypes.oneOfType([
				    PropTypes.object,
				    PropTypes.func
				  ]).isRequired,
	isAuthenticated:PropTypes.bool.isRequired
};

function mapStateToProps(state){
	return{
		isAuthenticated:state.user && !!state.user.token
	}
}

export default connect(mapStateToProps)(UserRouteHOC);