const { Schema } = require('mongoose')
const proschema=require('./Productschema')

const productreg=((req,res)=>
{
    let add=proschema({
        productname:req.body.name,
        productprice:req.body.price,
        productauthor:req.body.author,
        productgenre:req.body.genre,
        productdescription:req.body.description
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
module.exports={productreg,findauthor,findtitle,viewallproduct}
