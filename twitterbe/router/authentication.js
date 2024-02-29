const express=require('express');
const {login,signup,logout, forgatepassword}=require('../function/authetication')
const {checkSignupFormate}=require("../middleware/checkSignupFormate")
const {doesEmailExist}=require("../middleware/doesEmailExist")
const authentication=express.Router();
authentication.post('/login',login)
authentication.post('/signup',checkSignupFormate,doesEmailExist,signup)
authentication.post('/logout',logout)
authentication.post('/forgatepassword',forgatepassword)
module.exports={authentication}