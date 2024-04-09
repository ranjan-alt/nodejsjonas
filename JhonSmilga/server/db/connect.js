const mongoose = require("mongoose")

const connectionString = "mongodb+srv://admin:admin@jhonsmilga.mvn2ycw.mongodb.net/"

mongoose.connect(connectionString).then(() => console.log("coneected to db...").catch((error) => console.log(error)))