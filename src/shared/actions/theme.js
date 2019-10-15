import axios from 'axios';
import {
	    FETCH_PRIMARY_CATEGORY,
	    LATEST_FETCHED,
	    CATEGORY_HOMEPAGE_UI_A,
	    CATEGORY_HOMEPAGE_UI_B,
	    CATEGORY_HOMEPAGE_UI_C,
	    ALL_FETCHED
	} from '../types';


const CategoryNamesFetched = (allcategories) =>({
	type: FETCH_PRIMARY_CATEGORY,
	allcategories
});



export const fetchAllCategoryNames =()=>dispatch=>
	axios.get("/api/category/allcategorynames")
		.then(res=>res.data.allcategories)
		.then(allcategories=>{
			dispatch(CategoryNamesFetched(allcategories))
		});


const themeTypeCollections = (blogcollections)=>({
	type:LATEST_FETCHED,
	blogcollections
});
const themeAllCollections = (blogcollections)=>({
	type:ALL_FETCHED,
	blogcollections
});

export const fetchThemeTypeCollections = (type)=>dispatch=>
	axios.get("/api/collections/type",{
		params:{
			type,
			limit:9,
			skip:0
		}
	})
	.then(res=>res.data.blogcollections)
		.then(blogcollections=>{
			dispatch(themeTypeCollections(blogcollections))
		});

export const fetchThemeAllCollections = (type,limit,skip)=>dispatch=>
	new Promise((resolve,reject)=>{
		axios.get("/api/collections/type",{
			params:{
				type,
				limit,
				skip,
			}
		})
		.then(res=>res.data.blogcollections)
			.then(blogcollections=>{
				dispatch(themeAllCollections(blogcollections))
				resolve(blogcollections);
			});
	});
	

const themeCategoryACollections = (blogcollections)=>({
	type:CATEGORY_HOMEPAGE_UI_A,
	blogcollections
})

export const fetchThemeCategoryACollections = (category)=>dispatch=>
	axios.get("/api/collections/related",{
		params:{
			category,
			limit:9
		}
	})
	.then(res=>res.data.blogcollections)
		.then(blogcollections=>{
			dispatch(themeCategoryACollections(blogcollections))
		});

const themeCategoryBCollections = (blogcollections)=>({
	type:CATEGORY_HOMEPAGE_UI_B,
	blogcollections
})

export const fetchThemeCategoryBCollections = (category)=>dispatch=>
	axios.get("/api/collections/related",{
		params:{
			category,
			limit:9
		}
	})
	.then(res=>res.data.blogcollections)
		.then(blogcollections=>{
			dispatch(themeCategoryBCollections(blogcollections))
		});

const themeCategoryCCollections = (blogcollections)=>({
	type:CATEGORY_HOMEPAGE_UI_C,
	blogcollections
})

export const fetchThemeCategoryCCollections = (category)=>dispatch=>
	axios.get("/api/collections/related",{
		params:{
			category,
			limit:9
		}
	})
	.then(res=>res.data.blogcollections)
		.then(blogcollections=>{
			dispatch(themeCategoryCCollections(blogcollections))
		});

