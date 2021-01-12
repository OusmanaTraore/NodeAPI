function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    /**
     * 
     // ctx.fillStyle = "rgb(200, 200, 25)";
     // ctx.fillRect(25, 25, 100, 100);
     
     // ctx.clearRect(35, 35, 40, 40);
     // ctx.strokeRect(50, 50, 50, 50);
     
     // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
     // ctx.fillRect(30, 30, 50, 50);
     */

    /**
     * Drawing a triangle
     *
     
     ctx.beginPath();
     ctx.moveTo(75, 50);
     ctx.lineTo(100, 75);
     ctx.lineTo(100, 25);
     ctx.fill();
     */
    /**
     * smilung face
     */

    // var x = 75,
    //   y = 75,
    //   z = 50,
    //   h = 0;
    // ctx.beginPath();
    // ctx.arc(x, y, z, h, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(x, y, z - 15, h, Math.PI, false); // Outer circle
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    // ctx.stroke();

    /**
     * // Stroked triangle
     */
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 24);
    // ctx.lineTo(24, 125);
    // ctx.closePath();
    // ctx.stroke();

    /**
     *
     // Filled triangle
     */

    // ctx.beginPath();
    // ctx.moveTo(24, 24);
    // ctx.lineTo(125, 24);
    // ctx.lineTo(24, 125);
    // ctx.fill();

    // for (var i = 0; i < 4; i++) {
    //   for (var j = 0; j < 6; j++) {
    //     ctx.beginPath();
    //     var x = 200 + j * 50; // x coordinate
    //     var y = 230 + i * 50; // y coordinate
    //     var radius = 20; // Arc radius
    //     var startAngle = 0; // Starting point on circle
    //     var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    //     var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

    //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //     if (i > 1) {
    //       ctx.fill();
    //     } else {
    //       ctx.stroke();
    //     }
    //   }
    // }
    // Quadratric curves example
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();
    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fill();
    ctx.stroke();
  }
}
var incrementation = [75, 80, 90, 100, 110, 120, 130, 140];
function boucle() {
  incrementation.forEach(function (element) {
    return element;
  });
}
boucle();
