//step 1 first we require mongoose package
const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")


// name email foto password passwordconfirm

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please tell us the name"] },
    email: { type: String, required: [true, "please provide your email"], unique: true, lowercase: true },
    Photo: { type: String },
    password: { type: String, required: [true, "Please provide a password"], minLength: 8 },
    passwordConfirm: {
        type: String, required: [true, "Please confrim your password"],
        // this only works on SAVE!!!
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: "password is not same"
        }
    }
})

userSchema.pre("save", async function (next) {
    //Only run this function if password was actually modiefied
    if (!this.isModified("password")) return next()

    //hash the password with the cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    // delete the password confirm field
    this.passwordConfirm = undefined;
    next()
})

const User = mongoose.model("User", userSchema)
module.exports = User