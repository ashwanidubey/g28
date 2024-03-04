require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");
let signature=process.env.JWT_TOKEN
const {User}=require('../models/User')
const  login=async (req,res)=>{
    const {email,password}=req.body;
    const users=await User.find({email})
    if(users.length===0)
    {
        return res.send("user not found")
    }
    let hashp=users[0].password
    let response=await bcrypt.compare(password,hashp);
    if(response)
    {
        let data={id:users[0].id}
        let token=jwt.sign(data,signature)
        console.log(req.body)
       return  res.send({token,status:true})
       
    }
    return res.send("either email or password is not matching")
}
 const  signup=async (req,res)=>{
    const {email,password,name}=req.body;
    let salt=await bcrypt.genSalt();
    let haspassword=await bcrypt.hash(password,salt)
   
    const user = new User({email,password:haspassword,name});
    
    console.log(user)
    user.save().then(() => console.log('created user'));
    let data={id:user.id}
    let token=jwt.sign(data,signature)
    console.log(req.body)
    res.send({token,status:true})
}
 const  logout=async (req,res)=>{
    res.send("logout")
}
 const  forgatepassword=async (req,res)=>{
    res.send("gorgate pwd")
}

module.exports={login,signup,logout, forgatepassword}