const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })


const app = require("./app")
const DB = process.env.DATABASE
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected successfully")
    })
    .catch((error) => {
        console.log("DB Connection error:", error)
    });



// const testTour = new Tour({
//     name: "kumar",
//     rating: 5,
//     price: 500
// })

// testTour.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log("Error ")
// })


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})