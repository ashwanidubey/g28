require('dotenv').config()
const express=require("express");
const {router}=require('./router/router')
const { connectToMongo}=require("./db")

const app=express();

const PORT= process.env.PORT || 5500;

connectToMongo();

app.use(express.json())
app.use(router)


app.listen( PORT,()=>{
    console.log("server started")
})