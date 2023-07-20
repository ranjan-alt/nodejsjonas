const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true
    },
    durations: {
        type: Number,
        required: [true, "A tour must have durations"]
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour must have group size"]
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have difficulty"]
    },
    ratingsAverage: { type: Number, default: 4.5 },
    ratingsQuantity: { type: Number, default: 4.5 },
    price: {
        type: Number,
        required: [true, "Atour must have a price"]
    },
    priceDiscount: Number,
    summary: { type: String, trim: true, required: [true, "A tour must have description"] },
    description: { type: String, trim: true },
    imageCover: {
        type: String,
        required: [true, "A tour must have a cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
})
const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour

// where we will update delete the tour so the answer is in tour controller 