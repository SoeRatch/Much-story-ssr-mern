require('dotenv').config()
import express from 'express';
import {sendGetInTouchEmail} from '../mailer';
const router = express.Router();

router.post('/getintouch',(req,res)=>{
	let email = req.body.data.email;
	let message = req.body.data.message;
	sendGetInTouchEmail(email,message);
	res.json({message:"Thank you. Your message has been recorded. We will get back to you soon"});
});




export default router;

