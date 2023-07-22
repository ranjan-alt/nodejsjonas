class APIFeatures {
    constructor(query, queryString) {           // this function is called automatically as soon as we create a new object out of this class
        this.query = query;
        this.queryString = queryString;
    }
    // in query we are passing ---TOUR.find, and in queryString req.query
    // i am going to create one method for each of the functionality
    filter() {
        // const queryObj = { ...req.query }  this will not be available 
        const queryObj = { ...this.queryString }
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObj[el])
        console.log(req.query)

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        console.log(JSON.parse(queryStr))
        // let query = Tour.find(JSON.parse(queryStr))
        this.query = this.query.find(JSON.parse(queryStr))
        return this

    }
    // sort() {
    //     if (this.queryString.sort) {
    //         const sortBy = req.query.sort.split(",").join(" ")
    //         this.query = this.query.sort(sortBy)
    //     } else {
    //         this.query = this.query.sort(-createdAt)
    //     }
    //     return this
    // }
    limitFields() {
        if (this.queryString.fields) {
            const fields = req.query.fields.split(",").join(" ");
            // query = query.select("name price") this string is handelled above
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select("-__v") //here minus means exculding __v 
        }
        return this
    }
    paginate() {
        const page = this.queryString.page * 1 || 1 // multply *1 to convert string to number and || 1 means by default we need page no 1
        const limit = this.queryString.limit * 1 || 100
        const skip = (page - 1) * limit  // it means 21st page is requested then uptill 20 page it will be skipped multiply by limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }

}
module.exports = APIFeatures