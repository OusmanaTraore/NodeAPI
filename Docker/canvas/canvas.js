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
    var incrémentation = [75,80,90,100,110,120,130,140];
    var x = 140,
      y = x,
      z = 50,
      h = 0;
    ctx.beginPath();
    ctx.arc(x, y, z, h, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();

    /**
     * // Stroked triangle
     */
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 24);
    ctx.lineTo(24, 125);
    ctx.closePath();
    ctx.stroke();

    /**
     *
     // Filled triangle
     */

    ctx.beginPath();
    ctx.moveTo(24, 24);
    ctx.lineTo(125, 24);
    ctx.lineTo(24, 125);
    ctx.fill();
  }
}
