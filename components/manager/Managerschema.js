const mongoose=require ('mongoose')

const managerschema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    emailid:{type:String},
    password:{type:String},
    confpass:{type:String}
})

module.exports=new mongoose.model('manager',managerschema)