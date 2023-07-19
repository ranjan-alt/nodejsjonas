const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true
    },
    rating: { type: Number, default: 4.5 },
    price: {
        type: Number,
        required: [true, "Atour must have a price"]
    }
})
const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour

// where we will update delete the tour so the answer is in tour controller 