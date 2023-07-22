
//import the model here 
const Tour = require("../../nodejonas/models/tourmodel")


//here we are using advance filtering sorting and limiting and we can club them in constructor function which we will learn later
// just showing one example here 
// class APIFeatures {
//     constructor(query, queryString) {
//         this.query = query
//         this.queryString = queryString
//     }

//     //now we will create one method for each of the following
//     filter() {
//         const queryObj = { ...this.queryString }
//         const excludedFields = ["page", "sort", "limit", "fields"]
//         console.log(queryObj)
//     }
// }


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

        //BUILD QUERY
        //in mongoose there are two ways to write DATABASE QUERIES
        //1 - just use filter object
        //2 - some special mongoose method

        //1)FILTERING
        //1st way by using filter object 
        // const tour = await Tour.find({
        //     duration: 5,
        //     difficulty: easy
        // })

        // we dont want to query data in database we only need pagination thats why we are exculding these fields
        const queryObj = { ...req.query } //it will contain all the key value pairs which we give in req.query object
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObj[el])
        console.log(req.query)

        //2)ADVANCE FILTERING

        //    { duration: {$gte: 5}, difficulty: easy}
        // { duration: {gte: 5}, difficulty: easy}
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        //replace method requires a callback and a powerful callback is match
        console.log(JSON.parse(queryStr))
        // let query = Tour.find(JSON.parse(queryStr))

        let query = Tour.find(JSON.parse(queryStr))

        // //3) SORTING QUERY
        // if (req.query.sort) {
        //     const sortBy = req.query.sort.split(",").join(" ")
        //     query = query.sort(sortBy)
        // } else {
        //     query = query.sort(-createdAt)
        // }


        //4)FIELD LIMITING
        //we only want price and name then field limiting is useful
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            // query = query.select("name price") this string is handelled above
            query = query.select(fields)
        } else {
            query = query.select("-__v") //here minus means exculding __v 
        }

        //5) PAGINATION
        // ?page=2&limit=10
        const page = req.query.page * 1 || 1 // multply *1 to convert string to number and || 1 means by default we need page no 1
        const limit = req.query.limit * 1 || 100
        const skip = (page - 1) * limit  // it means 21st page is requested then uptill 20 page it will be skipped multiply by limit
        query = query.skip(skip).limit(limit)
        if (req.query.page) {
            const numTours = await Tour.countDocuments();
            if (skip > numTours) throw new Error(" The page doesnot exist")
        }
        // // EXECUTE QUERY

        const tours = await query
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