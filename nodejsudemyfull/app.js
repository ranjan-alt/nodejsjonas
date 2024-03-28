const fs = require("fs")
const express = require("express")

const app = express()

app.use(express.json())


// GET METHOD 
// either send data or send data as json 
// app.get("/", (req, res) => {
//     res.send("hello for the server")
// })
// app.get("/", (req, res) => {
//     res.status(200).json({ message: "hello from the server", app: "ranjanapps   " });
// })


// //POST METHOD
// app.post("/", (req, res) => {
//     res.send("You can post to this endpoint")
// })


const tours = JSON.parse(fs.readFileSync(`${__dirname}/txt/data.json`))
console.log(tours)

app.get("/api/v1/tours", (req, res) => {

    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
})

app.post("/api/v1/tours", (req, res) => {
    console.log(req.body)
    const newId = tours[tours.length - 1] + 1
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/txt/data.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
})

app.get("/api/v1/tours/:id", (req, res) => {   //here we have created a variable call id 
    console.log(req.params) // this variable is stored in params
    const id = req.params.id * 1
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        })
    }
    const tour = tours.find(el => el.id === id) // now this find method will return array of those numbers when it finds the condition true
    console.log(tour, "ranjan")
    res.status(200).json({
        status: "success",
        result: tours.length,
        data: {
            tour
        }
    })

})


//PATCH 
app.patch("/api/v1/tours/:id", (req, res) => {

})

const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port} `)
})

