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

// step 1 create schema set 2 create model 
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A Tour must have a name"],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, "A tour must have a price"]
    }
})


// step 2 - create model 
const Tour = mongoose.model("Tour", tourSchema)

const testTour = new Tour({
    name: "The park camper",
    rating: 4.7,
    price: 12000
})
testTour.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log("Error", err)
})


// console.log(process.env)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port} `)
})
