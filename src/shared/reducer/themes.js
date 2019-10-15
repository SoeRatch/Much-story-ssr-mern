import {
	    FETCH_PRIMARY_CATEGORY,
	    LATEST_FETCHED,
	    CATEGORY_HOMEPAGE_UI_A,
	    CATEGORY_HOMEPAGE_UI_B,
	    CATEGORY_HOMEPAGE_UI_C,
	    ALL_FETCHED
	} from '../types';

const initial_state={
	allcategories:{
		primary:[],
		other:[]
	},
	latest:[],
	categoryA:[],
	categoryB:[],
	categoryC:[],
	allCollection:[]
};

export const theme=(state=initial_state,action={})=>{
	switch(action.type){
		case FETCH_PRIMARY_CATEGORY:
			return {
					...state,
					allcategories:action.allcategories
				}
		case LATEST_FETCHED:
			return {...state,
					latest:[ ...action.blogcollections]}
		case CATEGORY_HOMEPAGE_UI_A:
			return {...state,
					categoryA:[ ...action.blogcollections]}
		case CATEGORY_HOMEPAGE_UI_B:
			return {...state,
					categoryB:[ ...action.blogcollections]}
		case CATEGORY_HOMEPAGE_UI_C:
			return {
				...state,
				categoryC:[ ...action.blogcollections]}
		case ALL_FETCHED:
			return {
				...state,
				allCollection:[ ...action.blogcollections]}
		default:
			return state;
	}
}

