/**
 * Iterate with JavaScript While Loops
 */
// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Setup
var myArray = [];

// Only change code below this line

for (var i = 0; i <= 5; i++) {
  myArray.push(i);
}

/**
 *Count Backwards With a For Loop
 */
// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
/**
 * Iterate Through an Array with a For Loop
 */
// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
/**
 * Basic JavaScript: Nesting For Loops
 */
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

/**
 * Iterate with JavaScript Do...While Loops
 */
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
} while (i < 10);
{
  i++;
}
/**
 * Replace Loops using Recursion
 */
function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
function sum(arr, n) {
  // Only change code below this line

  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Only change code above this line
}
/**
 * Profile Lookup
 */
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
