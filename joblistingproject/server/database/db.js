const mongoose = require("mongoose")


const Connection = async () => {
    // yahan ek issue hai since mongodb is an external thing it not in our codebase 
    //so for that we have to write try and catch block for exception handelling
    // yahan pe await isliay lagya kyuki ye promise return krega

    const URL = "mongodb+srv://user:codeforinterview@cluster0.qkd31vp.mongodb.net/?retryWrites=true&w=majority"
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })  //is connect function ki help se we can connect with out database
        console.log("Database connected")
    } catch (error) {
        console.log('error while connecting with the database', error)
    }
}

module.exports = Connection