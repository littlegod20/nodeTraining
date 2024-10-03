const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000, // optional, for controling size of chunk stream reads.
  // encoding: "utf-8", // also optional, to show the file content
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", () => console.log(error));
