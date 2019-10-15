import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post("/",(req,res)=>{
	const { credentials } = req.body;
	User.findOne({email:credentials.email}).then(
		user =>{
				if(user && user.isValidPassword(credentials.password)){
					res.json({
						user: user.toAuthJSON()
					});
				} 
				else {
						res.status(400).json({
							errors:{global:"Invalid credentials"}
						});
				}
			});
});

router.post("/confirmation",(req,res)=>{
	const token = req.body.token;
	
	User.findOneAndUpdate({confirmationToken:token}, // 1st param -condition to search
			{confirmationToken:"", confirmed: true}, // 2nd param - updation
			{new: true}								 // 3rd param - option . true gives updated version of the new record inside then fn.
			).then(user=>							 // if we do not specify option , then record would be without updation .
				user? res.json({user:user.toAuthJSON() })
					: res.status(400).json({})
				);

});



export default router;