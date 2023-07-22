const User = require("../models/usermodel")

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body)

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