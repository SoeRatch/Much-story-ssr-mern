import {
	    CREATE_BLOG,
	    FETCH_BLOG,
	    COMMENTS_FETCHED,
	    CREATE_COMMENT
	} from '../types';


export const blog=(state={},action={})=>{
	switch(action.type){
		case CREATE_BLOG:
			return action.blog
		case FETCH_BLOG:
			return action.blog
		default:
			return state;
	}
}


export const comments = (state=[],action={})=>{
	switch(action.type){
		case COMMENTS_FETCHED:
			return [ ...action.comments]
		case CREATE_COMMENT:
			return [action.comment,...state];
		default: return state;
	}
}