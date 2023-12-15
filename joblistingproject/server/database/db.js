const mongoose = require("mongoose")


const Connection = async (username, password) => {
    console.log(username, password, ">>>>>>")
    // yahan ek issue hai since mongodb is an external thing it not in our codebase 
    //so for that we have to write try and catch block for exception handelling
    // yahan pe await isliay lagya kyuki ye promise return krega
    // learned alot in this how to connect to db 
    // this is bad practice to write mongo url we must have dotenv file

    const URL = `mongodb+srv://${username}:${password}@cluster0.qkd31vp.mongodb.net/?retryWrites=true&w=majority`
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })  //is connect function ki help se we can connect with out database
        console.log("Database connected")
    } catch (error) {
        console.log('error while connecting with the database', error)
    }
}

module.exports = Connection