/**
 * Variable global et local
 */
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

/**
 * Reourner Stand in Line
 */
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();

  return removed;
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
//[1,2,3,4,5]
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//[2,3,4,6]

/**
Return Early pattern for functions
 */
 // Setup
function abTest(a, b) {
  // Only change code below this line

if(a <0 || b<0){
  return;
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

var count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 7:
  case 8:
  case 9:
    count += 0;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count --;
    break;

}
if(count <= 0){
  return (count + " " + "Hold");
}else{
  return (count + " " + "Bet");
}
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');