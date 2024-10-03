const { readFile } = require("node:fs");

console.log("started a first task");
// CHECK FILE PATH !!!
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

// console
// started a first task
// starting next task
// Hello, this is the first text file.
// completed first task
