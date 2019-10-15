import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const AdminRouteHOC = ({user,component:Component,...rest}) =>(
	<Route {...rest} render={props => (user && user.token && user.email=="pensheelapp@gmail.com")? <Component {...props} /> : <Redirect to="/register" />} />
);

AdminRouteHOC.propTypes = {
	component: PropTypes.object.isRequired,
	user:PropTypes.object.isRequired
};

function mapStateToProps(state){
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(AdminRouteHOC);