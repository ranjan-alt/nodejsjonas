
const express = require("express")
const morgan = require("morgan")
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express()


if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))  // we can aslo write tiny
}


app.use(express.json())  // in order to parse data from the body
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
    console.log("hello from the middleware")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})





// app.get("/api/v1/tours", getAllTours)
// app.get("/api/v1/tours/:id", getTour)
// app.post("/api/v1/tours", createTour)
// app.patch("/api/v1/tours/:id", updateTour)
// app.delete("/api/v1/tours/:id", deleteTour)




app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)




// start server
module.exports = app;
