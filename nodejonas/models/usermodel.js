//step 1 first we require mongoose package
const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")


// name email foto password passwordconfirm

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us the name"]
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
        unique: true,
        lowercase: true
    },
    Photo: { type: String },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confrim your password"],
        // this only works on SAVE!!!
        validate: {
            validator: function (el) {
                console.log(el)
                return el === this.password
            },
            message: "password is not same"
        }
    }
})

// This is a pre-save hook (middleware) that automatically runs before saving a user document.
//  It hashes the password using bcrypt with a cost factor of 12 (strong hashing), 
// and then it sets passwordConfirm to undefined to avoid persisting it in the database.
userSchema.pre("save", async function (next) {
    //Only run this function if password was actually modified
    if (!this.isModified("password")) return next()

    //hash the password with the cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    // delete the password confirm field
    this.passwordConfirm = undefined;
    next()
})

// This instance method is added to the user schema to compare the provided candidatePassword with the actual userPassword (hashed password).
//  It uses bcrypt.compare to perform the comparison and returns a boolean indicating if the passwords match.

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model("User", userSchema)
module.exports = User