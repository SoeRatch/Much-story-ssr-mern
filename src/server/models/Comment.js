import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false); 

const schema = new mongoose.Schema({
	comment_string:String,
	votes:{type: Number, default: 0},
	userId : {type: mongoose.Schema.Types.ObjectId, required: true },
	username:String,
	blogId:{type: mongoose.Schema.Types.ObjectId, required: true },
},
{timestamps:true}

);




export default mongoose.model('Comment',schema);