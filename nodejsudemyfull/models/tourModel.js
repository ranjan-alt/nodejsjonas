const mongoose = require("mongoose")


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


module.exports = Tour


// this model will be imported in tourController wherein we will create read update delete