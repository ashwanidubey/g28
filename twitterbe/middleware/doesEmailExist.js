const {User}=require('../models/User')
const doesEmailExist=async ( req,res,next)=>{
   const {email,password,name}=req.body;
   let users=await User.find({email})
   if(users.length===0)
   return next();
   return res.send("email already exist")
}

module.exports={doesEmailExist}