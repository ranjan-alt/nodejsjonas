const fs = require("fs")
const express = require("express")
const morgan = require("morgan")


const app = express()

app.use(morgan("dev"))  // we can aslo write tiny
app.use(express.json())  // in order to parse data from the body

app.use((req, res, next) => {
    console.log("hello from the middleware")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/txt/data.json`))
console.log(tours)


const getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: "success",
        requestTime: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    })
}


const getTour = (req, res) => {   //here we have created a variable call id 
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

}

const createTour = (req, res) => {
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
}


const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            tour: "<updated tour here/>"
        }
    })
}


const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        })
    }
    res.status(200).json({
        status: "success",
        data: null
    })
}

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    })
}

const createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yte defined"
    })
}

const getUser = () => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    })
}


const updateUser = () => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    })
}

const deleteUser = () => {
    res.status(500).json({
        status: "Error",
        message: "This route is not yet defined"
    })
}

// app.get("/api/v1/tours", getAllTours)
// app.get("/api/v1/tours/:id", getTour)
// app.post("/api/v1/tours", createTour)
// app.patch("/api/v1/tours/:id", updateTour)
// app.delete("/api/v1/tours/:id", deleteTour)

app.route("/api/v1/tours").get(getAllTours).post(createTour)
app.route("/api/v1/tours/:id").get(getTour).patch(updateTour).delete(deleteTour)


//user routes
app.route("/api/v1/users").get(getAllUsers).post(createUser)
app.route("/api/v1/users/:id").get(getUser).patch(updateUser).delete(deleteUser)

const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port} `)
})

