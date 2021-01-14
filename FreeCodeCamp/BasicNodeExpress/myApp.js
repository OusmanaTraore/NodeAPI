var express = require("express");
var app = express();
require("dotenv").config();

console.log(process.env.VARIABLE_ONE);
// Direction du port d'écoute.
app.listen(3000);
// console.log("Hello World");

// Création de route via app.get()

app.get("/hello", (req, res) => {
  res.send("Hello Express");
});
// Envoi de fichier
let absolutePathIndex = __dirname + "/views/index.html";
// let absolutePathImage = __dirname + "/assets";
let absolutePathCSS = __dirname + "/public";

app.get("/", (req, res) => {
  res.sendFile(absolutePathIndex);
});
// Basic Node and Express - Serve Static Assets

// app.use("/images", express.static(absolutePathImage));
app.use(express.static(absolutePathCSS));

// Basic Node and Express - Serve JSON on a Specific Route
// Let's create a simple API by creating a route that responds with JSON at the path /json.
let person = {
  Name: "Bob",
  Age: 20,
};
app.get("/person", (req, res) => {
  res.json(person);
});

// Basic Node and Express - Use the .env File
// The .env file is a hidden file that is used to pass environment variables to your application.

// 6) Use the .env file to configure the app
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});
module.exports = app;
