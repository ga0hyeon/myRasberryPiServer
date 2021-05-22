const http = require("http");
http
  .createServer((request, response) => {
    response.end("HI");
  })
  .listen(8080);
console.log("server start!");
