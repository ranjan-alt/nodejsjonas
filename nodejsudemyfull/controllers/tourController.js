// const fs = require("fs")
const Tour = require("./../models/tourModel")

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../txt/data.json`))


// these two middleware was required if we are serving file from json since we dont have defined schema for it 
// exports.checkId = (req, res, next, val) => {
//     console.log(`the tour id is ${val}`)
//     if (req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: "fail",
//             message: "Invalid id"
//         })
//     }
//     next()
// }

// exports.checkBody = (req, res, next) => {
//     if (!req.body.name || !req.body.price) {
//         return res.status(400).json({
//             status: "fail",
//             message: "missing name or price"
//         })
//     }
//     next();
// }

exports.getAllTours = async (req, res) => {
    // console.log(req.requestTime)
    // console.log("ranjan")
    // res.status(200).json({
    //     status: "success",
    //     requestTime: req.requestTime,
    //     results: tours.length,
    //     data: {
    //         tours
    //     }
    // })
    try {

        const tours = await Tour.find();
        res.status(200).json({
            status: "succes",
            result: tours.length,
            data: {
                tours
            }
        })
    } catch (err) {
        res.status(200).json({
            status: "fail",
            message: err
        })
    }
}

exports.getTour = async (req, res) => {   //here we have created a variable call id 
    // console.log(req.params) // this variable is stored in params

    // const tour = tours.find(el => el.id === id) // now this find method will return array of those numbers when it finds the condition true
    // console.log(tour, "ranjan")
    // res.status(200).json({
    //     status: "success",
    //     result: tours.length,
    //     data: {
    //         tour
    //     }
    // })

    try {
        const tour = await Tour.findById(req.params.id)         /// how can we get acccess to id ? req.params.id simple
        // Tour.findOne({ _id: req.params.id })
        res.status(200).json({
            status: "success",
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(200).json({
            status: "fail",
            message: err
        })
    }

}

exports.createTour = async (req, res) => {


    // console.log(req.body)
    // const newId = tours[tours.length - 1] + 1
    // const newTour = Object.assign({ id: newId }, req.body)
    // tours.push(newTour)
    // fs.writeFile(`${__dirname}/txt/data.json`, JSON.stringify(tours), err => {
    //     res.status(201).json({
    //         status: "success",
    //         data: {
    //             tour: newTour
    //         }
    //     })
    // })

    try {
        const newTour = await Tour.create(req.body)
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }


}


exports.updateTour = async (req, res) => {

    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         tour: "<updated tour here/>"
    //     }
    // })


    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "sccess",
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


exports.deleteTour = (req, res) => {

    res.status(200).json({
        status: "success",
        data: null
    })
}