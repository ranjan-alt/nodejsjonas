///////
////
///
// now after learning.js we will refactor the code to improve the look and feel of our code 
// we will also learn middleware


const express = require("express");
const fs = require("fs")


const app = express();
app.use(express.json()) // app.use example of middleware
//middleware video started
//middleware ------------------------------------------->>>>>>>>>>>>>>>
app.use((req, res, next) => {                 ///globally middleware is added 
    console.log('Hello from middleware')
    next()
})

// we can have 100s of middleware right now we just want to know the time when request is sent
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})





const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));


const getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: "success",
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    })
}

const getTour = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    if (id > tours.length) {
        return res.status(404).json({
            status: "failed",
            message: "Invalid ID"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
}


const createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
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
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "sucess",
        data: {
            tour: "<Updated tour here ....>"
        }
    })
}

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(204).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "sucess",
        data: {
            tour: null
        }
    })
}


// app.get("/api/v1/tours", getAllTours)
// app.get("/api/v1/tours/:id", getTour)
// app.post("/api/v1/tours", createTour)
// app.patch("/api/v1/tours/:id", updateTour)
// app.delete("/api/v1/tours/:id", deleteTour)


// But still code is not perfect we can do more perfect way by routes 
//instead of writing single way we can write the same code in one line 

app.route("/api/v1/tours").get(getAllTours).post(createTour)

app.route("/api/v1/tours/:id").get(getTour).patch(updateTour).delete(deleteTour)

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})