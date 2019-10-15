import axios from 'axios';
import {
	USER_LOGGED_IN,
	USER_LOGGED_OUT
	} from '../types';

import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = user =>({
	type:USER_LOGGED_IN,
	user
});

export const userLoggedOut = () =>({
	type:USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
	axios.post("/api/auth",{credentials})
									.then(res=>res.data.user)
	.then( user=>{
		localStorage.muchStoryJWT = user.token;
		setAuthorizationHeader(user.token);
		dispatch(userLoggedIn(user)); 
	});

export const logout = () => dispatch =>{
	return new Promise((resolve,reject)=>{
							localStorage.removeItem("muchStoryJWT");
							setAuthorizationHeader();
							dispatch(userLoggedOut());
							resolve("done");
						});
};

export const confirm = (token) => (dispatch) =>
	axios.post('/api/auth/confirmation',{token})
		.then(res=>res.data.user)
		.then(user=>{
			localStorage.muchStoryJWT = user.token;
			dispatch(userLoggedIn(user));
		});


