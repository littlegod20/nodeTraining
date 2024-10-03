const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const writeFilePromise = util.promisify(writeFile);
// const readFilePromise = util.promisify(readFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `\nTHIS IS AWESOME: \n\t${first} \n\t${second}`,
      { flag: "a" }
    );
    console.log(first, "\n", second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText(" ./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// code to read two files and write one file based off of the two files read..
// util.promisify was used
// const { readFile, writeFile } = require("fs");
// const util = require("util");

// const writeFilePromise = util.promisify(writeFile);
// const readFilePromise = util.promisify(readFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
