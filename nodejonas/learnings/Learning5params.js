
const fs = require("fs")


const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


//why we are doing this ??
// the reason is we are checking params for getTour, updatetour and deletetour thus its better to add param middleware and dont repeat code 
// now we will remove this set of code from everywhere rather tahn writing same code again and again
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
    // console.log(req.params)
    // const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id)
    // if (id > tours.length) {
    //     return res.status(404).json({
    //         status: "failed",
    //         message: "Invalid ID"
    //     })
    // }

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
    // if (req.params.id * 1 > tours.length) {
    //     return res.status(404).json({
    //         status: "fail",
    //         message: "Invalid ID"
    //     })
    // }
    res.status(200).json({
        status: "sucess",
        data: {
            tour: "<Updated tour here ....>"
        }
    })
}

exports.deleteTour = (req, res) => {
    // if (req.params.id * 1 > tours.length) {
    //     return res.status(204).json({
    //         status: "fail",
    //         message: "Invalid ID"
    //     })
    // }
    res.status(200).json({
        status: "sucess",
        data: {
            tour: null
        }
    })
}
