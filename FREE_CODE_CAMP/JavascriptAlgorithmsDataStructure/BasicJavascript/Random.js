/**
 * Generate Random Fractions with JavaScript
 */

function randomFraction() {
  // Only change code below this line
  var x = Math.random();
  var y = Math.random();
  var res = x / y;

  return res;

  // Only change code above this line
}
/**:
 * Generate Random Whole Numbers with JavaScript
 */
function randomWholeNum() {
  // Only change code below this line

  var z = Math.floor(Math.random() * 10);
  return z;
}
/**
 * Generate Random Whole Numbers within a Range
 */
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
