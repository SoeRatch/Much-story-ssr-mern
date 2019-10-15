import express from 'express';
import BlogContent from '../models/BlogContent';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';

import authenticate from '../middlewares/authenticate';
import mongoose from 'mongoose';

const router = express.Router();

const castUserId = (userId) => mongoose.Types.ObjectId(userId);

router.get('/type',(req,res)=>{
	const type = req.query.type;
	let limit_query = req.query.limit || 3;
	limit_query=Number(limit_query);
	let skip_query = req.query.skip || 9;
	skip_query=Number(skip_query);
	BlogContent.aggregate([
			{ 
	          $sort: {
		          createdAt:-1
		      }
	         },
	         {
	         	$limit:limit_query
	         },
	         {
	         	$skip:skip_query
	         },
	         {
	         	$lookup:{
							from:"users",
							localField:"userId",
							foreignField:"_id",
							as:"resulting"
						}
	         },
	         {
						$unwind:{ path: "$resulting" }
			 },
			{

			   	$project: {
                  title:1,
                  thumbnail_url:1,
                  description:1,
                  votes:1,
                  category:1,
                  username:"$resulting.username"
                }
            }
		]).exec(function(err, results){
						    let blogcollections = results;
						    res.json({blogcollections})
			 			});
});



router.get('/related',(req,res)=>{
	const category=req.query.category;
	let limit_query = req.query.limit || 3;
	limit_query=Number(limit_query);
	BlogContent.aggregate([
			{
				$sort: {
		          createdAt:-1
		      	}
		     },
			{ 
				
	          $match: { 
	          	category:category
	          			
	           }
	         },
	         {
	         	$limit:limit_query
	         },
	         {
	         	$lookup:{
							from:"users",
							localField:"userId",
							foreignField:"_id",
							as:"resulting"
						}
	         },
	         {
						$unwind:{ path: "$resulting" }
			 },
			{

			   	$project: {
                  title:1,
                  thumbnail_url:1,
                  description:1,
                  votes:1,
                  category:1,
                  username:"$resulting.username"
                }
            }
		]).exec(function(err, results){
						    let blogcollections = results;
						    res.json({blogcollections})
			 			});
});



router.use(authenticate);


router.get('/usercollections',(req,res)=>{
	/*BlogContent.find({userId:req.currentUser._id},{title:1,_id:1})
		.then(blogcollections=>res.json({blogcollections}));*/

		BlogContent.aggregate([ // or use like this => db.collection("blogcontents").aggregate([
					
					{ 
			          $match: { userId: req.currentUser._id }
			         },
					{
						$lookup:{
							from:"users",
							localField:"userId",
							foreignField:"_id",
							as:"resulting"
						},
						
					},
					/*{$project:{
						    title: 1,
						    resulting:{ username:true }
						}}*/
					
					
					   /*
					   {
					   	$unwind:{ path: "$resulting" }
					   },

					   {
					   	$project: {
                          midEq: {$eq: ["$userId", "$resulting._id"]},
                          title:1,username:"$resulting.username"
                        }},


                         {
                          $match: {
                          	$and:[
	                            {title: {$exists:true}},
	                            {midEq: {$eq:true}}
                        ]}},

                        */

                    {
						$unwind:{ path: "$resulting" }
					},
					{

					   	$project: {
					   	  _id:1,
                          title:1,
                          thumbnail_url:1,
                          description:1,
                          votes:1,
                          category:1,
                          username:"$resulting.username"
                        }
                    }

					
					]).exec(function(err, results){

						    let blogcollections = results;
						    res.json({blogcollections})
			 			});
});



export default router;
