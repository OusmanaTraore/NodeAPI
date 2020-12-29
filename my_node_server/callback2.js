let events = require("events");
function Cars() {
  events.EventEmitter.call(this);
  this.seeCar = function (make) {
    this.emit("sawCar", make);
  };
}
Cars.prototype.__proto__ = events.EventEmitter.prototype;
let show = new Cars();
function logCar(make) {
  console.log("Saw a " + make);
}
function printColor(make, color) {
  console.log("Saw a %s %s", color, make);
}
show.on("sawCar", logCar);
show.on("sawCar", function (make) {
  let colors = ["white", "red", " black"];
  let color = colors[Math.floor(Math.random() * 3)];
  printColor(make, color);
});
show.seeCar("BMW");
show.seeCar("Audi");
// show.seeCar("Bugatti");
// show.seeCar("Lamborghini");
show.seeCar("Ferrari");
// show.seeCar("Porshe");

function logCar(logMsg, callback) {
  process.nextTick(function () {
    callback(logMsg);
  });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for (var idx in cars) {
  var message = "Saw a" + cars[idx];
  logCar(message, function () {
    console.log("Normal Callback: " + messsage);
  });
}
for (var idx in cars) {
  var messsage = "Saw a" + cars[idx];
  (function (msg) {
    logCar(msg, function () {
      console.log("Closure Callback:" + msg);
    });
  })(messsage);
}
