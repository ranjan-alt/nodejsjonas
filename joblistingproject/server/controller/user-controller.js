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

const getUsers = async (request, response) => {       // since ye hmara get api hai so request ka yahan pe koi kam nahi hai koi body nahi hai headers nahi hai 
    //response me mko data sned krna hai or kon sa data send krna hai  or kon se collection me se niaklna hai wo hmare userschema me define kia hua hai 
    try {
        const users = await User.find({})                        //hmne empty chora hua hai wo sara data nikal dega 
        response.status(200).json(users)                  //direct reponse send kr denge
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}


module.exports = { addUser, getUsers }

