require("dotenv").config()
// require("express-async-errors")
// var request = require('request');
const request = require("request")

const express = require("express")

const app = express()

const connectDb = require("./connectDb")
const productRouter = require("./routes/products")

const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//middleware
app.use(express.json())


//products route

'use strict';



//routes
app.get("/", (req, res) => {
    res.send("<h1>Store Api</h1>")
})



app.use("/api/v1/products", productRouter)


app.use(notFound)
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDb()
        app.listen(port, console.log(`app is running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();
