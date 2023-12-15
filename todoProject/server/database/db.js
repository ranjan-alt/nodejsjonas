const mongoose = require("mongoose")

const Connection = () => {

    const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.yvejsq1.mongodb.net/"
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

    mongoose.connection.on("connected", () => {
        console.log("database connected successfully")
    })

    mongoose.connection.on("disconnected", () => {
        console.log("database disconnected")
    })

    mongoose.connection.on("error", () => {
        console.log("error while connecting with the database")
    })
}


module.exports = Connection;


