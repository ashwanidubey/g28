const { Comment } = require("../models/Comment");
const { Post } = require("../models/Post");
const createPost = (req, res) => {
   const { image_url, desc } = req.body
   const user = req.userid
   let data = {
      image_url,
      desc,
      user
   }
   const post = new Post(data)
   post.save();
   res.send(post);

}
const deletePost = (req, res) => {
   res.send("deletePost")
}
const updatePost = (req, res) => {
   res.send("updatePost")
}
const searchPost = (req, res) => {
   res.send("searchPost")
}
const like = async (req, res) => {
   const { userId, postId } = req.body;
   let updatedPost = await Post.findOneAndUpdate(
      { _id: postId, "likes": { $ne: userId } },
      { $push: { likes: userId } },
      { new: true }

   );
   if (updatedPost) {
      return res.send({ sucess: true, updatedPost });

   } else {
      return res.send({ sucess: false, message: "post not found or somone already liked song" });

   }
}
const comment = async (req, res) => {
   const {userId,postId,comment}=req.body;
   let commentobj=new Comment({user:userId,post:postId,desc:comment});
   commentobj.save();
   let updatedPost = await Post.findOneAndUpdate(
     { _id: postId, "comments": { $ne: userId } },
     { $push: { comments: userId } },
     { new: true }
    
   );
   res.send(commentobj)
}
const dislike = (req, res) => {
   res.send("dislike")
}
const deletecomment = (req, res) => {
   res.send("deletecomment")
}
const updatecomment = (req, res) => {
   res.send("updatecomment")
}
const shareuserdata = (req, res) => {
   res.send("shareuserdata")
}
const modifyuserdata = (req, res) => {
   res.send("modifyuserdata")
}
const savedpost = (req, res) => {
   res.send("savedpost")
}


module.exports = {
   createPost, deletePost, updatePost,
   searchPost, like, comment, dislike,
   deletecomment, updatecomment, shareuserdata,
   modifyuserdata, savedpost
}