var fs = require("fs");
fs.readFileSync("input.txt", function (err, data) {
  if (err) return console.log.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
