
//import the model here 
const Tour = require("../../nodejonas/models/tourmodel")



exports.getAllTours = async (req, res) => {
    //to get the tour we use find method() and to create a new tour we use Create() method
    //find method will return the data in array 
    try {
        const queryObj = { ...req.query }
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObj[el])

        //ADVANCE FILTERING
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,)
        let query = Tour.find(JSON.parse(queryStr))

        //SORTING QUERY
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ")
            query = query.sort(sortBy)
        }

        //EXECUTE QUERY
        console.log(req.query, queryObj)
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
