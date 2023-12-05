// import { express } from "express";
const express = require("express")
// express ko import krne k bad hmko usko initailise karna padge 
const app = express()


const PORT = process.env.PORT || 3000

// server ko bannane k liay we have to write listen function 
// phala argument hota hai port number and second we can add callback function
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))