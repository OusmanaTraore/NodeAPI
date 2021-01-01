// switch (expression) {
//   case condition1:
//     statement(s);
//     break;
//   case condition2:
//     statement(s);
//     break;
//   case conditionN:
//     statement(s);
//     break;

//   default:
//     statement(s);
//     break;
// }

// Compteur
var count;
console.log("Début du compte");
for (count = 0; count < 10; count++) {
  console.log(`Le  compteur est à  :  ${count}`);
}
console.log("Fin du compte...");

// Loop control
var x = 1;
while (x < 20) {
  x += 1;
  if (x == 5) {
    continue;
  }
  console.log(x);
}
console.log("Sorti de la boucle.");
