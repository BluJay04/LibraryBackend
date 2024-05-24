const { Schema } = require('mongoose');
const userschema=require('./Userschema')

const userreg=((req,res)=>
{
    let add=userschema({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        date:req.body.date

    })
    add.save()
    .then((result)=>{
        console.log(result);
        res.json({
            msg:"data saved",
            data:result
            
        })
    })
    .catch((err)=>{
        res.json({
            err:err
        })
    })
})
const finduser=((req,res)=>{
   userschema.find({name:req.body.name})
   .then((result)=>{
    res.json({
        msg:"data received",
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

const findemail=((req,res)=>
{
    userschema.find({email:req.body.email})
    .then((result)=>
    {
        res.json({
            msg:"data retrieved",
            data:result
        })
    })

    .catch((err)=>
    {
        err:err
    })
})

module.exports={userreg,finduser,findemail}