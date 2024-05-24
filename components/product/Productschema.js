const mongoose=require('mongoose')


const proschema=new mongoose.Schema({
    productname:{type:String},
    productprice:{type:Number},
    productauthor:{type:String},
    productgenre:{type:String},
    productdescription:{type:String}
})

module.exports=new mongoose.model('product',proschema)