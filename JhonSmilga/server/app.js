// console.log("ranjan")
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

// Middleware
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS
// const corsOptions = {
//     origin: "http://localhost:5173", // Allow requests from localhost:5173
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.use(cors());

// Routes
app.use("/api/v1/tasks", tasks);

// Default route
app.get("/", (req, res) => {
    res.send("Hello there");
});

const port = 3000;

const start = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
