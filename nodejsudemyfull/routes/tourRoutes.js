const express = require("express")
const tourController = require("./../controllers/tourController")
const bodyParser = require("body-parser")

const tourRouter = express.Router()


//param middleware
tourRouter.param("id", tourController.checkId)

//create a checkbody middleware function 
// check if body contains the name and price property
// if not send back 400 (bad request)
// add it to post handlerstack


tourRouter.route("/").get(tourController.getAllTours).post(tourController.checkBody, tourController.createTour)
tourRouter.route("/:id").get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour)

module.exports = tourRouter