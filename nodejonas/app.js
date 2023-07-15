// summary 
//so the app will get the request and depending on the router it will enter the routes and then it will execute controllers and finally the response is send 


const express = require("express");
const morgan = require("morgan")

const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express();

//1)MIDDLEWARES
app.use(morgan("dev"))
app.use(morgan("tiny"))
app.use(express.json())

app.use((req, res, next) => {
    console.log('Hello from middleware')
    next()
})


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})


//2)ROUTES

app.use("/api/v1/tours", tourRouter) ///note: we cannnot use the routers before we actually decalre them
app.use("/api/v1/users", userRouter)

module.exports = app;