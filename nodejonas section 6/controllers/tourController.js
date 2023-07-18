
const fs = require("fs")


const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


//why we are doing this ??
// the reason is we are checking params for getTour, updatetour and deletetour thus its better to add param middleware and dont repeat code 
exports.checkId = (req, res, next, val) => {
    console.log(`Tour id is ${val}`)
    if (req.params.id * 1 > tours.length) {
        return res.status(404).send({
            status: "Fail",
            message: "Invalid id"

        })
    }
    next()
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: "fail",
            message: "Missing name or price"
        })
    }
    next() //if everything is correct then move to next middleware ie- createtour in tourroutes
}

exports.getAllTours = (req, res) => {
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

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
}

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {

    res.status(200).json({
        status: "sucess",
        data: {
            tour: "<Updated tour here ....>"
        }
    })
}

exports.deleteTour = (req, res) => {

    res.status(200).json({
        status: "sucess",
        data: {
            tour: null
        }
    })
}
