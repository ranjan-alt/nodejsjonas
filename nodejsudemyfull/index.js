const fs = require("fs");
const http = require("http");

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

const server = http.createServer((req, res) => {
  res.send("hello form the server");
});

server.listen(8000, "127.0.0.0", () => {
  console.log("Listning on port 8000");
});


