import axios from 'axios';
import { userLoggedIn } from './auth';

export const signup = user => dispatch =>
	axios.post("/api/users",{user})
									.then(res=>res.data.user)
	.then( user=>{
		localStorage.muchStoryJWT = user.token;
		dispatch(userLoggedIn(user)); 
	});


