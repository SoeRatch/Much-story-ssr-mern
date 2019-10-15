export const homePage = () => ({
	
})

export const dashboardPage =()=>({
	collections:{
		blogs:[
			{
				_id:"",
				title:"",
				thumbnail_url:"",
				description:"",
				votes:"",
				category:"",
				username:""
			}

		]
	}
});


export const blogPage = (blog)=>({
	blogcontent:blog
});

export const commentPage = ()=>({

});