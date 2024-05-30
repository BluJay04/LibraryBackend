const managerschema=require('./Managerschema')

const managerreg=((req,res)=>{
    let add=managerschema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        confpass:req.body.confirm
    })
    add.save()

    .then((result)=>{
        if(result.password==result.confpass)
            {
        res.json({
            data:result,
            status:200

        })
    }
        else
        {
            res.json({
                msg:"passwords dont match"
            })
        }
    
    })

    .catch((err)=>
    {
        res.json({
            err:err
        })
    })
})

module.exports={managerreg}