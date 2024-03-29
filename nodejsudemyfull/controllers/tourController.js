const fs = require("fs")

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../txt/data.json`))

exports.checkId = (req, res, next, val) => {
    console.log(`the tour id is ${val}`)
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        })
    }
    next()
}


exports.getAllTours = (req, res) => {
    console.log(req.requestTime)
    console.log("ranjan")
    res.status(200).json({
        status: "success",
        requestTime: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    })
}

exports.getTour = (req, res) => {   //here we have created a variable call id 
    console.log(req.params) // this variable is stored in params

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

exports.createTour = (req, res) => {
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


exports.updateTour = (req, res) => {

    res.status(200).json({
        status: "success",
        data: {
            tour: "<updated tour here/>"
        }
    })
}


exports.deleteTour = (req, res) => {

    res.status(200).json({
        status: "success",
        data: null
    })
}