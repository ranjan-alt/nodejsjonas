//step 1 first we require mongoose package
const mongoose = require("mongoose");
// const validator = require("validator")


// name email foto password passwordconfirm

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please tell us the name"] },
    email: { type: String, required: [true, "please provide your email"], unique: true, lowercase: true },
    Photo: { type: String },
    password: { type: String, required: [true, "Please provide a password"], minLength: 8 },
    passwordConfirm: { type: String, required: [true, "Please confrim your password"] }
})

const User = mongoose.model("User", userSchema)
module.exports = User