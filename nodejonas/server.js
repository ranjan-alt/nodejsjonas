
//4) STARTING THE SERVER
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
const app = require("./app")


console.log(app.get('env'))// it will say development




// console.log(process.env) // it will console buch of env



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})