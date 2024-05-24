const express=require('express')
const db=require('./database')
const bodyparser=require('body-parser')
const app=express()

app.use(express.json())

const routes=require('../Router')
app.use('/',routes)
app.use(bodyparser.json())

app.listen(4000,()=>
{
    console.log("running in port 4000");
})