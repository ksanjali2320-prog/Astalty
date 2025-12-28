
const mongoose = require("mongoose");

const createUserSchema = new mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        minlength:5,
    },
    firstName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    mobileNumber:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim:true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    hereAboutUs:{
        type:String,
        required:true
    },
    sizeOfTeam:{
        type:String,
        required:true
    },
    serviceProvide: [{ type: String, required: true }],
    privacyPolicyStatus:{
        type:Boolean,
        required:true
    },
    termsAndConditionsStatus:{
        type:Boolean,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("user",createUserSchema);
