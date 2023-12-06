// import { express } from "express";
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
// import { Connection } from "mongoose"
// express ko import krne k bad hmko usko initailise karna padge 

// import Connection from "./database/db"
const Connection = require("./database/db");
const Routes = require("./routes/routes.js")
const app = express()
dotenv.config()
app.use(bodyParser.json({ extended: true })) // agar nahi kia toh jo body me send kar rae wo undefined aega just like add api in network call
app.use(bodyParser.urlencoded({ extended: true })) // jo url me space hota hai toh %09 sab se encode kar deta hai to usko decode krne k liay we are using body parser
app.use(cors())
app.use("/", Routes)

const PORT = process.env.PORT || 3000

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username, password)
// server ko bannane k liay we have to write listen function 
//express ka server banta hai listen function se
// phala argument hota hai port number and second we can add callback function
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))