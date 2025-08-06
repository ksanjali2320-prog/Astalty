require('dotenv').config();
const mongoose = require('mongoose');

// promise or async, async is best don't know why.

const db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Db connected");
    }
    catch(error){
        console.log("db error",error);
        process.exit(1);
    }
};

// module.exports = db;