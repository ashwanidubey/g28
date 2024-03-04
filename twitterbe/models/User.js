const mongoose = require('mongoose');

const userscchema=mongoose.Schema( { 
    name: String ,
    email: String ,
    password: String 
   })
   
const User = mongoose.model('User',userscchema);

module.exports={User}