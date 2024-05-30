const express=require('express')
const db=require('./database')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(express.static(`${__dirname}/uploads`));

app.use(express.json())



app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
const routes=require('./Router')
app.use('/',routes)
app.use(bodyparser.json())

app.listen(4000,()=>
{
    console.log("running in port 4000");
})