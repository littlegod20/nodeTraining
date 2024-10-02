const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, "\n", second);

writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result:\n\t${first}\n\t${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
