// import { express } from "express";
const express = require("express")
// import { Connection } from "mongoose"
// express ko import krne k bad hmko usko initailise karna padge 

// import Connection from "./database/db"
const Connection = require("./database/db");
const app = express()


Connection()

const PORT = process.env.PORT || 3000

// server ko bannane k liay we have to write listen function 
//express ka server banta hai listen function se
// phala argument hota hai port number and second we can add callback function
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))