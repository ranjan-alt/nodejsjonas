const express = require("express")
const tourController = require("../controllers/tourController")
const authController = require("./../controllers/authController")
const tourRouter = express.Router();


//param middleware
// tourRouter.param("id", tourController.checkId)

//create a checkBody middleware function
//check if body contains the name and price of the property
//if not, send back 400(bad request)
// add it to the post handler stack


tourRouter.route("/top-5-cheap").get(tourController.aliasTopTours, tourController.getAllTours)
tourRouter.route("/tour-stats").get(tourController.getTourStats)
tourRouter.route("/monthly-plan/:year").get(tourController.getTourStats)


tourRouter.route("/").get(authController.protect, tourController.getAllTours).post(tourController.createTour)
tourRouter.route("/:id").get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour)

module.exports = tourRouter;