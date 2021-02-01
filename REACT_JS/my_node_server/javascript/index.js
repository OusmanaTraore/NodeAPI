// const code_0 = [];

// for (var i = 0; i <= 3; i++) {
//   this.code_0 = code_0.push(i);
//   console.log(code_0);
// }
// const code_a = ["A", "B", "C","D"];

// for (var i = 0; i <= code_a.length; i++) {
//   //   this.code_0 = code_0.push(i);
//   console.log(code_a[i]);
// }
// const code_0 = 0;
// const code_a = ["A", "B", "C", "D", "E", "F"];
// var liste_vide = [];

// for (var j = 0; j <= code_0; j++) {
//   for (var i = 0; i <= code_a.length; i++) {
//     //   this.code_0 = code_0.push(i);
//     //   console.log(code_0);
//     liste_vide = [code_0 + code_a[i]];
//     console.log(liste_vide);
//   }
// //   console.log(liste_vide);
// }
function create2DArray(rows, columns, value = (x, y) => 0) {
  var array = new Array(rows);
  for (var i = 0; i < rows; i++) {
    array[i] = new Array(columns);
    for (var j = 0; j < columns; j++) {
      array[i][j] = value(i, j);
    }
  }

  return array;
}

var array = create2DArray(5, 4, (row, column) => row + column);
console.log(array);
