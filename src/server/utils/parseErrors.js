import _ from 'lodash';

export default function(errors){
	const result = {};
	if(errors)
	console.log("hi",errors);


	_.forEach(errors,(val,key)=>{
		console.log(val);
		result[key] = val.message;
	})
	return result;
}