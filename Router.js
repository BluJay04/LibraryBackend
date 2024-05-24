const express=require("express")
Router=express.Router()

const user=require('./components/user/Usercontroller')
const product=require('./components/product/productcontroller')


Router.post('/userreg',user.userreg)
Router.post('/searchbyname',user.finduser)
Router.post('/searchbyemail',user.findemail)
Router.post('/productreg',product.productreg)
Router.post('/searchbyauthor',product.findauthor)
Router.post('/searchbytitle',product.findtitle)
Router.post('/viewall',product.viewallproduct)

module.exports=Router 

