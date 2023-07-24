const fs = require("fs")
const User = require("../models/usermodel")


exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()

        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users
            }
        })
    } catch (err) {

        res.status(500).json({
            status: "error",
            message: "This route is not ye defined"
        })
    }

}
exports.createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not ye defined"
    })
}
exports.getUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not ye defined"
    })
}
exports.updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not ye defined"
    })
}
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    })
}