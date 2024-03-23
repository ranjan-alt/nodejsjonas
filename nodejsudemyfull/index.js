const fs = require("fs");
const http = require("http");
const url = require("url")

// synchronous or blocking way
// console.log("script started");
// try {
//   const text = fs.readFileSync("./txt/main.txt", "utf-8");
//   // this read filesync is a synchronous in nature
//   console.log("file read succesffuly");

//   console.log(text);
// } catch (error) {
//   console.error("error reading file", error);
// }
// console.log("script ended");

// const textOut = `this is new line ${text} .created on ${Data.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// non blocking or asynchronous way
fs.readFile("./txt/main.txt", "utf-8", (err, data) => {
  console.log(data);
});

// Server

const data = fs.readFileSync(`${__dirname}/txt/data.json`, "utf-8")
const productData = JSON.parse(data)


const server = http.createServer((req, res) => {
  console.log(req.url)
  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end("This is overview")
  } else if (pathName == "/product") {
    res.end("this is product")
  } else if (pathName == "/api") {
    // res.end("API")
    // sned json data to client into some readble format
    //first thing is to reaad the file 
    res.writeHead(200, { "content-type": "application/json" })
    res.end(data)

  } else {
    res.writeHead(404, {             //to inform the broswr or client about reciveing the response one example is content type
      "Content-type": "text/html",
      "my-own-header": "Hello world",
      "name": "ranjan"
    })
    res.end("<h1>Page not found</h1>");
  }

});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning on port 8000");
});


