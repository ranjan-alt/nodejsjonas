const express = require("express");
const fs = require("fs")


const app = express();
app.use(express.json()) //while create a post request we have to create a middleware and this express.json is a middelware
//A middleware is just the function that can modify the incoming request data , it stands middle of request from client and response from server



// app.get("/", (req, res) => {
//     res.status(200).send("hello from the server side")
// })

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
//JSON.parse will automatically convert json into array of javascript objects


//GET METHOD
app.get("/api/v1/tours", (req, res) => {     // create your own version of api we must always specify the version of the api
    //here res req is the route handler
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
})

//POST METHOD
app.post("/api/v1/tours", (req, res) => {    //the method changes but the URL remains same and we can data from client to the server
    //req object stores all the data and information about the request that was perfomed
    //express doesnot put the body data on the request so in order to have the data available we have to use something called middleware
    // for post request to be performed we are using middleware i.e ----->>>>> app.use(express.json())

    // console.log(req.body) //just doing console here req.body will print json which we gave in postman

    //now task is to store data in our fictional database
    //firstof all we need to figureout the new id 
    const newId = tours[tours.length - 1].id + 1   // we want to get the last one so we get by tours.length -1 and + 1to add new id


    const newTour = Object.assign({ id: newId }, req.body)
    //object.assign bascially allows us to add object to the exisitng object together veryyyyyyy important 
    //next step is to push the newTour to the tour array 
    tours.push(newTour);
    // as now have push but we need to persist this in the new file 
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
    //here tours at the end because this is the place where we have to write and must be stringified

    //question shall we write writefile or writefilesync ?? [Event Loop Lecture]
    // the answer is writefile as we are in callback function which will run in the event loop and we can never even block the event loop
    // so we need writefile and not the synchronous one

    // res.send("done") 
    //sending the response and it must be done to complete the cycle of req, res
})


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})