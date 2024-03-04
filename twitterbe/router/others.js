const express=require('express');
const {createPost,deletePost,updatePost,
    searchPost,like,comment,dislike,
    deletecomment,updatecomment,shareuserdata,
    modifyuserdata,savedpost}=require('../function/others')

const {validateToken}=require("../middleware/validateuser")
const others=express.Router();

others.get('/createPost',validateToken,createPost)
 others.get('/deletePost',validateToken,deletePost)
 others.get('/updatePost',validateToken,updatePost)
 others.get('/searchPost',validateToken, searchPost)
 others.get('/like',validateToken,like)
 others.get('/comment',validateToken,comment)
 others.get('/dislike',validateToken,dislike)
 others.get('/deletecomment',validateToken,deletecomment)
 others.get('/updatecomment',validateToken,updatecomment)
 others.get('/shareuserdata',validateToken,shareuserdata)
 others.get('/modifyuserdata',validateToken,modifyuserdata)
 others.get('/savedpost',validateToken,savedpost)


module.exports={others} 