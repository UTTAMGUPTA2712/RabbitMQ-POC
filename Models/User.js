const { default: mongoose, Schema } = require("mongoose");

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    task:{
        type:[String],
        default:[]
    }
})
module.exports=mongoose.model(process.env.User_SCHEMA,UserSchema)