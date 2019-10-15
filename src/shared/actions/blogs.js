import axios from 'axios';
import {
	    CREATE_BLOG,
	    USER_COLLECTIONS_FETCHED,
	    FETCH_BLOG,
	    COMMENTS_FETCHED,
	    CREATE_COMMENT,
	    RELATED_FETCHED,
	    CATEGORY_COLLECTION_FETCHED
	} from '../types';


const blogsCreated = blog =>({
	type: CREATE_BLOG,
	blog
});

const commentCreated = comment =>({
	type: CREATE_COMMENT,
	comment
});

const blogFetched = blog =>({
	type: FETCH_BLOG,
	blog
});

const commentsFetched = (comments)=>({
	type:COMMENTS_FETCHED,
	comments
});

const collectionsFetched = (blogcollections) =>({
	type: USER_COLLECTIONS_FETCHED,
	blogcollections
});

const relatedFetched=(blogcollections)=>({
	type:RELATED_FETCHED,
	blogcollections
});

const categoryCollectionFetched=(blogcollections)=>({
	type:CATEGORY_COLLECTION_FETCHED,
	blogcollections
});



export const createblogs = blog => dispatch =>
	axios.post("/api/blogcontent",{blog})
		.then(res=>res.data.blog)
		.then(blog=>{
			dispatch(blogsCreated(blog));
		});

export const fetchusercollections =()=>dispatch=>
	axios.get("/api/collections/usercollections")
		.then(res=>res.data.blogcollections)
		.then(blogcollections=>{
			dispatch(collectionsFetched(blogcollections))
		});

export const fetchblog = (parameter) => dispatch =>{
	return new Promise((resolve,reject)=>{
				axios.get("/api/blogcontent",{
				      params: {
				        parameter
				      }
				    })
				.then(res=>res.data.blog)
				.then(blog=>{
					dispatch(blogFetched(blog));
					resolve(blog)
				});

	});
}
	
export const createComment = data => dispatch =>
	axios.post("/api/blogcontent/comments",{data})
		.then(res=>res.data.comment)
		.then(comment=>{
			dispatch(commentCreated(comment))
		});

export const fetchcomments =(blogid)=>dispatch=>
	axios.get("/api/blogcontent/comments",{
		params:{
				blogid
			}
		})
		.then(res=>res.data.comments)
		.then(comments=>{
			dispatch(commentsFetched(comments))
		});

export const fetchrelatedcollections = (category) =>dispatch=>
	axios.get("/api/collections/related",{
		params:{
				category,
				limit:3
			}
		})
		.then(res=>res.data.blogcollections)
			.then(blogcollections=>{
				dispatch(relatedFetched(blogcollections))
			});

export const fetchcategorycollections = (category) =>dispatch=>
	axios.get("/api/collections/related",{
		params:{
				category,
				limit:20
			}
		})
		.then(res=>res.data.blogcollections)
			.then(blogcollections=>{
				dispatch(categoryCollectionFetched(blogcollections))
			});

