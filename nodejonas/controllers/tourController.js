
//import the model here 
const Tour = require("../../nodejonas/models/tourmodel")
const APIFeatures = require("../utils/apiFeatures")

//Now we will refactor the code and make the code more reusable
//here we are using advance filtering sorting and limiting and we can club them in constructor function which we will learn later
//and we will import the in class in UTILS folder 


exports.aliasTopTours = (req, res, next) => {
    req.query.limit = "5";
    req.query.sort = "-ratingsAverage, price"
    req.query.fields = "name,price,ratingsAverage,summary,difficulty"
    next()  // if not written next otherwise middleware will stuck here and will not move to next middleware
}


exports.getAllTours = async (req, res) => {
    //to get the tour we use find method() and to create a new tour we use Create() method
    //find method will return the data in array 
    try {

        // EXECUTE QUERY
        //importantn
        // const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields().paginate(); //we keep on chaining methods
        const features = new APIFeatures(Tour.find(), req.query)
        const tours = await features.query
        res.status(200).json({
            status: "success",
            results: tours.length,
            data: {
                tours
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

}

exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id) //if we seen in tourrouter there is :/id if there was name then we had to write req.params.name
        //Tour.findOne({_id:req.param.id}) same thing as written above
        res.status(200).json({
            status: "success",
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "invalid data sent"
        })
    }


}

exports.createTour = async (req, res) => {
    //we can create tour based on the data which comes from  body
    // const newTour = new Tour({})
    // newTour.save()

    // Best way is to call create method
    try {
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "invalid data sent"
        })
    }


}

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            //The findByIdAndUpdate method is used to find a document by its _id field and update it with the new data provided in req.body.
            //findByIdAndUpdate here we passsed id and the second parameter is what we are going to update
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "sucess",
            data: {
                tour
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id)   //req.body nahi chahiye simple id params me daal k uda do
        res.status(200).json({
            status: "sucess",
            data: {
                tour: null
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}

//aggregation pipeline

exports.getTourStats = async (req, res) => {
    try {
        const stats = await Tour.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 } }
            },
            {
                $group: {
                    _id: "$difficulty",
                    numTours: { $sum: 1 },
                    numRatings: { $sum: "ratingsQuantity" },
                    avgRating: { $avg: "$ratingsAverage" },
                    avgPrice: { $avg: "$price" },
                    minPrice: { $min: "$price" },
                    maxPrice: { $max: "$price" }
                }
            }
        ])

        res.status(200).json({
            status: "Success",
            message: "stats succcessfull",
            data: {
                stats
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


exports.getMonthlyPlans = async (req, res) => {
    try {
        const year = req.params.year * 1
        const plan = await Tour.aggregate([
            {
                $unwind: '$startDates'
            },
            {
                $match: {
                    startDates: {
                        $gte: new Date(`${year}-01-01`),
                        $lte: new Date(`${year}-12-31`)
                    }
                }
            },
            {
                $group: {
                    _id: { month: "$startDates" },
                    numTourStarts: { $sum: 1 },
                    tours: { $push: "$name" }
                }
            },
            {
                $addFields: { month: "$_id" }
            },
            {
                $project: {
                    _id: 0
                }
            },
            {
                $sort: { numTourStarts: -1 }
            },
            {
                $limit: 6
            }

        ])

        res.status(200).json({
            status: "Success",
            message: "stats succcessfull",
            data: {
                plan
            }
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}