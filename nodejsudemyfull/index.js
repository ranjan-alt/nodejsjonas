const fs = require("fs");

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

fs.readFile("./txt/main.txt","utf-8", (err,data)=>{
  console.log(data)
})



