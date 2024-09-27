const mongoose = require("mongoose")

const connectionString = "mongodb+srv://admin:admin@jhonsmilga.mvn2ycw.mongodb.net/"

const connectDb = () => {

    mongoose.connect(connectionString).then(() => console.log("coneected to db..."))

}

module.exports = connectDb
