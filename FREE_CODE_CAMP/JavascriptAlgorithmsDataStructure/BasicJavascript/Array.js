var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[2][1];
// myData = 8

/**
 * Manipulation des tableaux avec push pour ajouter
 * une valeur a la fin d'un tableau
 */
var myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);
//  myArray = [ ["John", 23],["cat", 2],  ["dog", 3]];

/**
 * Manipulation des tableaux avec pop() pour retirer
 *  la derniere valeur d'un tableau
 */
var myArray = [
  ["John", 23],
  ["cat", 2],
];
var removedFromMyArray = myArray.pop();
// myArray = [ ["John", 23],["cat", 2]];

/**
 * Manipulation des tableaux avec shift() pour retirer
 *  la premiere valeur d'un tableau
 */
var removedFromMyArray = myArray.shift();
//myArray = ["cat", 2];

/**
 * Manipulation des tableaux avec unshift() pour ajouter quelque chose
 *  à la premiere valeur d'un tableau
 */
myArray.unshift(["Paul", 35]);
