const { Schema } = require('mongoose');
const userschema = require('./Userschema')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('image')
const userreg = ((req, res) => {
    let add = userschema({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        date: req.body.date,
        image: req.file
    })
    add.save()
        .then((result) => {
            console.log(result);
            res.json({
                msg: "data saved",
                data: result,
                status: 200
            })
        })
        .catch((err) => {
            res.json({
                err: err,
                status: 409
            })
        })
})
const finduser = ((req, res) => {
    userschema.find({ name: req.body.name })
        .then((result) => {
            res.json({
                msg: "data received",
                data: result
            })
        })
        .catch((err) => {
            res.json({
                err: err
            })
        })

})

const findemail = ((req, res) => {
    userschema.find({ email: req.body.email })
        .then((result) => {
            res.json({
                msg: "data retrieved",
                data: result

            })
        })

        .catch((err) => {
            res.json({
                err: err
            })

        })
})

const login = ((req, res) => {
    userschema.findOne({ email: req.body.email })

        .then((result) => {

            if (result.password == req.body.password) {
                res.json({
                    msg: "login successfull",
                    status: 200

                })

            }
            else {
                res.json({
                    msg: "enter valid password",
                    status: 409
                })

            }
        })

        .catch((err) => {
            res.json({
                err: "enter valid email",
                staus: 500
            })
        })
})

const update = ((req, res) => {
    userschema.findByIdAndUpdate({ _id: req.params.id },
        {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            date: req.body.date,
            image: req.file
        }
    )
        .then((result) => {
            res.json({
                msg: "saved changes"
            })

        })
        .catch((err) => {
            res.json({
                err: err

            })

        })
})

const forgotpassword = ((req, res) => {
    userschema.findOneAndUpdate({ email: req.body.email }, { password: req.body.password })
        .then((result) => {



            if (result.email == req.body.email) {
                res.json({
                    status: 200,
                    msg: "updated successfully"
                })

            }
            else
            {
                res.json({
                    msg:"email not found"
                })
            }



        })

        .catch((err) => {
            res.json({
                err: "email not found"
            })
        })


})

const userdelete = ((req, res) => {
    userschema.findByIdAndDelete({ _id: req.params.id })
        .then((result) => {
            res.json({
                msg: "profile deleted"
            })
        })
        .catch((err) => {
            res.json({
                err: err
            })
        })
})
module.exports = { userreg, upload, finduser, findemail, login, update, forgotpassword, userdelete }