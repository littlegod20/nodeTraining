const http = require("http");

const server = http.createServer(() => {
  console.log("request event");
  resizeBy.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000...");
});
