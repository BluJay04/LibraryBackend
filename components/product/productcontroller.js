const { Schema } = require('mongoose')
const proschema=require('./Productschema')

const multer=require("multer")

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('productimage')

const productreg=((req,res)=>
{
    let add=proschema({
        productname:req.body.name,
        productprice:req.body.price,
        productauthor:req.body.author,
        productgenre:req.body.genre,
        productdescription:req.body.description,
        productimage:req.file
    })
    add.save()
    .then((result)=>
    {
        res.json({
            msg:"product uploaded",
            data:result
        })
    })
    .catch((err)=>
    {
        res.json({
            err:err
        })
    })
})

const findauthor=((req,res)=>{
    proschema.find({productauthor:req.body.author})
.then((result)=>{
    res.json({
        msg:'data found',
        data:result
    })
})
.catch((err)=>{
    res.json({
        err:err
    })
})
})

const findtitle=((req,res)=>
{
    proschema.find({productname:req.body.name})
    .then((result)=>{
        res.json({
            msg:"data retrieved",
            data:result
        })
    })
    .catch((err)=>{
        res.json({
            err:err
        })

    })
})


const viewallproduct=((req,res)=>{
    proschema.find()
    .then((result)=>
    {
        res.json({
            msg:"all data",
            data:result
        })
    })
    .catch((err)=>
    {
        res.json({
        err:err
        })
    })
})

const findid=((req,res)=>{
    proschema.findById({_id:req.params.id})
    .then((result)=>
    {
        res.json({
            msg:"data found",
            data:result
        })
    })
    .catch((err)=>
    {
        res.json({
            err:err
        })
    })
})
module.exports={productreg,upload,findauthor,findtitle,viewallproduct,findid}
