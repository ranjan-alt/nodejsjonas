const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
const app = require("./app")

mongoose.connect("mongodb+srv://admin:admin@practice.um4rxav.mongodb.net/", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false, // Set to false to use findOneAndUpdate() instead of findAndModify()
    useUnifiedTopology: true
}).then(() => console.log("database connected successfully"))


// just for testing purpose
// const testTour = new Tour({
//     name: "The park camper",
//     rating: 4.7,
//     price: 12000
// })
// testTour.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log("Error", err)
// })


// console.log(process.env)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port} `)
})
