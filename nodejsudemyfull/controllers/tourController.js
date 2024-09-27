const Tour = require("../models/tourModel")

const APIFeatures = require("./../utils/apiFeatures")


exports.getAllTours = async (req, res) => {

    try {

        //4) PAGINATION page=2&limit=10

        // query = query.skip(2).limit(10)
        // const page = parseInt(req.query.page) || 1;
        // const limit = parseInt(req.query.limit) || 100;
        // const skip = (page - 1) * limit
        // query = query.skip(skip).limit(limit);

        //send response
        const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields();
        const tours = await features.query
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




    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
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


exports.deleteTour = async (req, res) => {
    try {

        const tour = await Tour.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "success",
            data: { tour }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

//Aggregation pipeline
exports.getTourStats = async (req, res) => {
    try {
        const stats = await Tour.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 } }
            },
            {
                $group: {
                    _id: null,
                    avgRating: { $avg: "$ratingsAverage" },
                    avgQty: { $avg: "$ratingsQuantity" },
                    avgPrice: { $min: "$price" }
                }
            }
        ]);
        res.status(200).json({
            status: "Success",
            data: {
                stats
            }
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
        });
    }
};