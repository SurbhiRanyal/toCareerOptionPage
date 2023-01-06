const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
    {
        fullName: {
            type:String,
            required:true,
            trim:true,
        },
        email: {
            type:String,
            required:true, 
            unique:true,
            trim:true,
        },
        password: {
            type:String,
            required:true, 
            minLen: 8, 
            maxLen: 15,
            trim:true,
        }, // encrypted password
        mobile: {
            type:String,
            required:true,
            unique:true, 
            trim:true,
            //valid Indian mobile number
        }, 
},{ timestamps:true }

)
module.exports=mongoose.model("newCareer", careerSchema)