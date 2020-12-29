const port = 3020,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Incoming request received!");
    response.writeHead(httpStatus.OK, {
      "content-type": "text/html",
    });
    let responseMessage = "<h1>Bienvenu tout le monde!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);
// 4;
console.log(`The server is running on port: ${port}`);
