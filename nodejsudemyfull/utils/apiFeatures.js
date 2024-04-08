


class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = { ...this.queryString }
        const excludeFields = ["page", "sort", "limit", "fields"]
        excludeFields.forEach(el => delete queryObj[el])

        //ADVANCE Filtering
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        console.log(JSON.parse(queryStr))


        this.query.find(JSON.parse(queryStr));
        return this

    }

    sort() {
        if (this.queryString.sort) {
            try {
                console.log(req.query.sort, "query coming for sorting")
                const sortBy = req.query.sort.split(",").join(" ");
                console.log(sortBy)

                if (sortBy.trim() !== "") {
                    // Use a ternary operator to create a dynamic sorting function
                    this.query = query.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
                }


            } catch (err) {
                console.error("Error sorting data", err)
            }

        } else {
            this.query = query.sort("-createdAt")
        }

        return this;


    }
    limitFields() {
        if (this.queryString) {
            console.log("Requesting specific fields:", req.query.fields);
            try {
                const fields = req.query.fields.split(",").join(" ");
                console.log("Selected fields:", fields);
                this.query = query.select(fields);
            } catch (err) {
                console.error("Error selecting fields:", err);
            }
        } else {
            this.query = query.select("-_v")
        }
        return this
    }
}

module.exports = APIFeatures