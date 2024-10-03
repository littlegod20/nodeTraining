var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // this loads the entire file into memory
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);

    // this loads the file chunk-by-chunk into memory
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8"); // create a readable stream
    // when stream is ready
    fileStream.on("open", () => {
      // connect the reading stream to the writing stream
      fileStream.pipe(res);
      // the pipe() is a method that connects the readStream and the writeStream
      //createReadStream creates the source and  res is the destination.
    });
    // handle errors
    fileStream.on("err", (err) => {
      res.end(err);
    });
  })
  .listen(5000);

// note the different types of streams
// // File to File
// const readStream = fs.createReadStream('source.txt');
// const writeStream = fs.createWriteStream('destination.txt');
// readStream.pipe(writeStream);

// // // File to HTTP Response
// const vidReadStream = fs.createReadStream('video.mp4');
// vidReadStream.pipe(res);

// // // HTTP Request to File (file upload)
// req.pipe(fs.createWriteStream('uploaded-file.txt'));
