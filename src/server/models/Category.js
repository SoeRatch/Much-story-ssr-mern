import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false); 

const schema = new mongoose.Schema({
	name:String,
	type:String,
	thumbnail_url:{
				type:String, 
				default:''
			},
	number_of_blogs:{type: Number, default: 0}
}

);




export default mongoose.model('Category',schema);