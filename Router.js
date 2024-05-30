const express=require("express")
Router=express.Router()

const user=require('./components/user/Usercontroller')
const product=require('./components/product/productcontroller')
const manager=require('./components/manager/Managercontroller')

Router.post('/userreg',user.upload,user.userreg)
Router.post('/searchbyname',user.finduser)
Router.post('/searchbyemail',user.findemail)
Router.post('/productreg',product.upload,product.productreg)
Router.post('/searchbyauthor',product.findauthor)
Router.post('/searchbytitle',product.findtitle)
Router.post('/viewall',product.viewallproduct)
Router.post('/viewid/:id',product.findid)
Router.post('/login',user.login)
Router.post('/update/:id',user.upload,user.update)
Router.post('/forgotpassword',user.forgotpassword)
Router.post('/deleteprofile/:id',user.userdelete)
Router.post('/managerregistration',manager.managerreg)

module.exports=Router 

