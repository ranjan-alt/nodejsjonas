const express = require("express")
const router = express.Router();
const { addUser } = require("../controller/user-controller");

// router.post("/add", () => {
//     console.log("hello")
//     // bhot sare callback function honge and it will become big so now we will create controllers
// })
router.post("/add", addUser)


module.exports = router