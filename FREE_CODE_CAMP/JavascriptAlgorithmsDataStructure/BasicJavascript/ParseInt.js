/**
 * Use the parseInt Function
 */

function convertToInteger(str) {
  var a = parseInt(str);
  return a;
}
convertToInteger("56");

/**
 *  Use the parseInt Function with a Radix
 *
 * Conversion d'un binaire en base 2;
 */
function convertToInteger2(str) {
  return parseInt(str, 2);
}
convertToInteger2("10011");
