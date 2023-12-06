const User = require("../schema/user-schema")



// request - api k sath app kya kya bhej rae ho jaise add api aya network call me toh payload kya kya bhej rae ho

const addUser = async (request, response) => {
    const userData = request.body
    // console.log(user) // undefined aega kyuki hmne body parser install nahi kia hai
    console.log(userData, "????")

    const newUser = new User(userData)
    console.log(newUser, ">>>")
    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }

}


module.exports = { addUser }

