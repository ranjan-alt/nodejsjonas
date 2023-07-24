const User = require("../models/usermodel")
const jwt = require("jsonwebtoken")
const AppError = require("../../nodejonas/utils/appError")


const signedToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}
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

        const token = signedToken(newUser._id)
        res.status(201).json({
            status: "Success",
            token,
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

exports.login = async (req, res, next) => {
    try {
        // const email = req.body.email  or
        const { email, password } = req.body; //i have destructured client has send this to check where credentials are correct or not
        // 1) check if email and apssword exits 
        if (!email || !password) {
            throw new Error("please provide email and password!")
        }
        //2) check if user exits or not and password is correct   
        const user = await User.findOne({ email }).select("+password")
        const correct = await user.correctPassword(password, user.password)

        if (!user || !correct) {
            throw new Error("Incorrect email or password")
            return next()
        }
        console.log(user)
        //3)if everything is ok send the token to client 
        const token = signedToken(user._id);
        res.status(200).json({
            status: "success",
            token
        })
    } catch (err) {
        res.status(400).json({
            status: "fails",
            message: err.message
        })
    }



}


exports.protect = async (req, res, next) => {
    //1) Getting the token and check if user is there 
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    //2) validate the token or verification token

    //3) check if user still exists

    //4) if user changed password after the jwt was issued
    next()
}