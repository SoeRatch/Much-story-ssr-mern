import express from 'express';
import Category from '../models/Category';
import parseErrors from '../utils/parseErrors';
import authenticate from '../middlewares/authenticate';
import mongoose from 'mongoose';
const router = express.Router();

router.get('/allcategorynames',(req,res)=>{
	Category.find({},{name:true,type:true,_id:false})
		.then(categories=>{
			const primarycategories=categories.filter(cat=>cat.type=='primary').map(cate=>cate.name);
			const othercategories=categories.filter(cat=>cat.type!='primary').map(cate=>cate.name);
			let allcategories={
				"primary":primarycategories,
				"other":othercategories
			};
			res.json({allcategories})
		});
});


router.use(authenticate);

router.post('/',(req,res)=>{  
	Category.create({ ...req.body.category})
		.then(category => res.json({ category }))
		.catch(err => res.status(400).json(
			{ errors: parseErrors(err.errors) }
			)
		);
});






export default router;

