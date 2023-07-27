const { promisify } = require("util")
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
            return res.status(401).json({
                status: "fail",
                message: "Please provide email and password!"
            });
        }
        //2) check if user exits or not and password is correct   
        const user = await User.findOne({ email }).select("+password")
        const correct = await user.correctPassword(password, user.password)

        if (!user || !correct) {
            return res.status(401).json({
                status: "fail",
                message: "Incorrect email or password"
            });
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
    try {
        // 1) Getting the token and check if user is there 
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
            // return next(new AppError("your are not logged in", 400))
            return res.status(400).json({
                status: "fail",
                message: error.message
            });
        }

        // 2) Validate the token or verification token
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        console.log(decoded);

        // 3) Check if the user still exists

        // 4) If the user changed the password after the JWT was issued

        // If everything is okay, allow access to the protected route
        next();
    } catch (err) {
        return res.status(401).json({
            status: "fail",
            message: "Invalid token. Please log in again to get access."
        });
    }
};
