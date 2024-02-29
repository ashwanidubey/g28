const createPost=(req,res)=>{
    res.send("createPost")
 }
 const deletePost=(req,res)=>{
    res.send("deletePost")
 }
 const updatePost=(req,res)=>{
    res.send("updatePost")
 }
 const searchPost=(req,res)=>{
    res.send("searchPost")
 }
 const like=(req,res)=>{
    res.send("like")
 }
 const comment=(req,res)=>{
    res.send("comment")
 }
 const dislike=(req,res)=>{
    res.send("dislike")
 }
 const deletecomment=(req,res)=>{
    res.send("deletecomment")
 }
 const updatecomment=(req,res)=>{
    res.send("updatecomment")
 }
 const shareuserdata=(req,res)=>{
    res.send("shareuserdata")
 }
 const modifyuserdata=(req,res)=>{
    res.send("modifyuserdata")
 }
 const savedpost=(req,res)=>{
    res.send("savedpost")
 }


module.exports={createPost,deletePost,updatePost,
                searchPost,like,comment,dislike,
                deletecomment,updatecomment,shareuserdata,
                modifyuserdata,savedpost}