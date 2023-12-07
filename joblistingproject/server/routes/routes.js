const express = require("express")
const router = express.Router();
const { addUser, getUsers } = require("../controller/user-controller");

// router.post("/add", () => {
//     console.log("hello")
//     // bhot sare callback function honge and it will become big so now we will create controllers
// })
router.post("/add", addUser)
router.get("/all", getUsers)

module.exports = router