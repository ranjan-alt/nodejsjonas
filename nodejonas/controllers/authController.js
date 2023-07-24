const User = require("../models/usermodel")

exports.signUp = async (req, res) => {
    try {
        // const newUser = await User.create(req.body)  security flaw with this line of code , any user can become admin 
        // so now we will replace the code
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })

        res.status(201).json({
            status: "Success",
            data: {
                User: newUser
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }

}