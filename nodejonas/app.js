// summary 
//so the app will get the request and depending on the router it will enter the routes and then it will execute controllers and finally the response is send 
const express = require("express");
const morgan = require("morgan")

const AppError = require("../nodejonas/utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express();

//1)MIDDLEWARES
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}


app.use(morgan("tiny"))
app.use(express.json())
app.use(express.static(`${__dirname}/public`)) //this is how we can serve static folder from public and not form the route
app.use((req, res, next) => {
    console.log('Hello from middleware')
    next()
})


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.headers)
    next()
})


//2)ROUTES

app.use("/api/v1/tours", tourRouter) ///note: we cannnot use the routers before we actually decalre them
app.use("/api/v1/users", userRouter)


//handelling unhandled routes
app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: "fails",
    //     message: `cant find ${req.originalUrl} on the server`
    // })
    // const err = new Error(`cant find ${req.originalUrl} on the server`);
    // err.status = "fail";
    // err.statusCode = 404;
    // next(err)z

    next(new AppError(`cant find ${req.originalUrl} on the server`, 404))
})

app.use(globalErrorHandler)

module.exports = app;