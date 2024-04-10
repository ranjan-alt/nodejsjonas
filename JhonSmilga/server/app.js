// console.log("ranjan")
const express = require("express");
const app = express()

const tasks = require("./routes/tasks")
const connectDb = require("./db/connect")


//middleware
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send("hello dere")
})


app.use("/api/v1/tasks", tasks)


// app.get("/api/v1/tasks")       get all task
// app.post("/api/v1/tasks")      create a task
// app.get("/api/v1/tasks/:id")   get single task
//app.patch("/api/v1/tasks/:id")  update a task
//app.delete("/api/v1/tasks/:id")  delete the task








const port = 3000;

const start = async () => {
    try {
        await connectDb()
        app.listen(port, console.log(`server is listning on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()