import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false); 

const schema = new mongoose.Schema({
	title:{
		type:String,
	    required:true,
		unique:true
	},
	blogdata_htmlstring:String,
	blogdata_string:String,
	description:{
				type:String, 
				default:'description can also be used in meta tags to improve SEO'
			},
	thumbnail_url:{
				type:String, 
				default:'https://res.cloudinary.com/surajsharma/image/upload/v1571055642/muchstoryimages/foggybuildings.jpg'
			},
	votes:{type: Number, default: 0},
	userId : {type: mongoose.Schema.Types.ObjectId, required: true },
	tags: [{type:mongoose.Schema.Types.ObjectId,required:false}],
	comments:[{type:mongoose.Schema.Types.ObjectId,required:false}],
	category:String,
	humanized_duration:String,
},
{timestamps:true}

);

schema.methods.addcomment=function addcomment(comment_id){
		this.comments.push(comment_id);
};


export default mongoose.model('BlogContent',schema);