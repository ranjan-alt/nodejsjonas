const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
})



const User = mongoose.model("user", userSchema)
module.exports = User


// module.exports ={User}  dont do {} in schema file as it will say user is not a constructor