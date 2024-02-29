const express=require('express');
const {authentication}=require('./authentication')
const {others}=require('./others')
const router=express.Router();
router.use('/v1',authentication)
router.use('/v2',others)
module.exports={router}