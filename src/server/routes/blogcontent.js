import express from 'express';
import BlogContent from '../models/BlogContent';
import Comment from '../models/Comment';
import parseErrors from '../utils/parseErrors';
import readTime from '../utils/readEstimate';
import authenticate from '../middlewares/authenticate';

import mongoose from 'mongoose';
const router = express.Router();

const castUserId = (userId) => mongoose.Types.ObjectId(userId);

router.get('/',(req,res)=>{
	const splittedparam = req.query.parameter.split('-');

    const id_string=splittedparam[splittedparam.length-1];
    const blogid=castUserId(id_string);
    BlogContent.aggregate([
       
        { 
          $match: { _id:blogid }
         },
       {
        $lookup: {
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
                    _id:1,
                    title:1,                    
                    username:"$resulting.username",
                    blogdata_htmlstring:1,
                    description:1,
                    thumbnail_url:1,
                    votes:1,
                    userId:1,
                    category:1,
                    humanized_duration:1,
                    createdAt:1
                  }
        }

      ]).exec(function(err, results){
              res.json({blog:results[0]});
            });
      
      /*BlogContent.findOne({_id:id_string})
      .then(blog=>res.json({blog}));*/

});


router.get('/comments',(req,res)=>{
    const id_string=req.query.blogid;
    const blogid=castUserId(id_string);

    Comment.find({blogId:blogid})
      .then(comments=>{
        res.json({comments});
      })

});



router.use(authenticate);

router.post('/',(req,res)=>{
  let blogdata_htmlstring = req.body.blog.blogdata_htmlstring;
  const {humanizedDuration} = readTime(blogdata_htmlstring);
  
	BlogContent.create({ ...req.body.blog,
                       humanized_duration:humanizedDuration,
                       userId: req.currentUser._id
                      }
                    )
		.then(blog => res.json({ blog }))
		.catch(err => res.status(400).json(
			{ errors: parseErrors(err.errors) }
			)
		);
});

router.post('/comments',(req,res)=>{
  let comment = req.body.data.comment;
  let blog_id = req.body.data.blogid;

  Comment.create({
    comment_string:comment,
    userId:req.currentUser._id,
    blogId:blog_id,
    username:req.currentUser.username
  }).then(comment=>{
      BlogContent.findOne({_id:comment.blogId})
        .then(blog=>{
          blog.addcomment(comment._id);
          blog.save();
          res.json({comment});
        })
  });
    
});




export default router;

