import {
	    CREATE_BLOG,
	    USER_COLLECTIONS_FETCHED,
	    RELATED_FETCHED,
	    LATEST_FETCHED,
	    CATEGORY_COLLECTION_FETCHED
	} from '../types';


const INITIAL_STATE={
	userblogs:[{
		_id:"",
		title:"",
		thumbnail_url:"",
		description:"",
		votes:0,
		category:"",
	    username:""	    
	}],
	related:[{
		title:"",
	    username:"",
	    description:"",
	    thumbnail_url:"",
	    votes:0,
	    category:"",
	    _id:""
	}],
	categorycollection:[{
		_id:"",
		title:"",
		thumbnail_url:"",
		description:"",
		votes:0,
		category:"",
	    username:""	    
	}]
}

export const collections = (state=INITIAL_STATE,action={})=>{
	switch(action.type){
		case USER_COLLECTIONS_FETCHED:
			return {...state,userblogs:[ ...action.blogcollections]}
		case RELATED_FETCHED:
			return {...state,related:[ ...action.blogcollections]}
		case CATEGORY_COLLECTION_FETCHED:
			return {...state,categorycollection:[ ...action.blogcollections]}
		default: return state;
	}
}

