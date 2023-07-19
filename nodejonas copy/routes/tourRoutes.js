const express = require("express")
const tourController = require("../controllers/tourController")
const tourRouter = express.Router();

//param middleware
// tourRouter.param("id", tourController.checkId)

//create a checkBody middleware function
//check if body contains the name and price of the property
//if not, send back 400(bad request)
// add it to the post handler stack



tourRouter.route("/").get(tourController.getAllTours).post(tourController.createTour)
tourRouter.route("/:id").get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour)

module.exports = tourRouter;