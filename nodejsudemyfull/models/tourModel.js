const mongoose = require("mongoose")


// step 1 create schema set 2 create model 
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A Tour must have a name"],
        unique: true,
        trim: true
    },
    durations: {
        type: Number,
        require: [true, "A tour must have a duration"]
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour must have a group size"]
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have a difficulty"]
    },

    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        deafult: 0
    },
    price: {
        type: Number,
        required: [true, "A tour must have a price"]
    },
    priceDiscount: {
        type: Number,

    },
    summary: {
        type: String,
        trim: true, required: [true, "Atour must have a description"]
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "A tour must have cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDate: [Date]

})


// step 2 - create model 
const Tour = mongoose.model("Tour", tourSchema)


module.exports = Tour


// this model will be imported in tourController wherein we will create read update delete