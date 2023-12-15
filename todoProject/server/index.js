const express = require("express");
const connectToDatabase = require("./database/db.js");
const app = express();

const PORT = 8000;

// Connect to the database
connectToDatabase();

// Set up your routes and middleware here

app.listen(PORT, () => {
    console.log("Your server is running on port " + PORT);
});
