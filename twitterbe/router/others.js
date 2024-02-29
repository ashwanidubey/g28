const express=require('express');
const {createPost,deletePost,updatePost,
    searchPost,like,comment,dislike,
    deletecomment,updatecomment,shareuserdata,
    modifyuserdata,savedpost}=require('../function/others')

const others=express.Router();

others.get('/createPost',createPost)
 others.get('/deletePost',deletePost)
 others.get('/updatePost',updatePost)
 others.get('/searchPost', searchPost)
 others.get('/like',like)
 others.get('/comment',comment)
 others.get('/dislike',dislike)
 others.get('/deletecomment',deletecomment)
 others.get('/updatecomment',updatecomment)
 others.get('/shareuserdata',shareuserdata)
 others.get('/modifyuserdata',modifyuserdata)
 others.get('/savedpost',savedpost)


module.exports={others}