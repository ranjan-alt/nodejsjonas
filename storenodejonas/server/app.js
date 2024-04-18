require("dotenv").config()



const express = require("express")
const app = express()

const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//middleware
app.use(express.json())


//routes
app.get("/", (req, res) => {
    res.send("<h1>Store Api</h1>")
})



//products route


app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, console.log(`app is running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();
