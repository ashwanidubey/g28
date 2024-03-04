const mongoose = require('mongoose');
require('dotenv').config()
const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
       console.log("connected to mongo")
    })
    .catch(()=>{
       console.log("connection to mongo failed ")
    }
    );
}
module.exports={ connectToMongo}
