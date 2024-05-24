const mongoose=require("mongoose")


const userschema=new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
    date:{type:Date}
})

module.exports=new mongoose.model("users",userschema)