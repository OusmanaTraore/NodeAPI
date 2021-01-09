var test = "Ceci est un test";
var sorti = "";
setTimeout(function () {
  for (var i = 0; i < test.length; i++) {
    sorti = test.charAt(i);
    //     sorti = push(test.charAt(i));
    console.log(sorti);
  }
}, 3000);
setInterval(function () {}, 2000);
const A = [0, 48, 1, 2, 73, 5, 3, 4];
const B = [0, 1, 5, 2, 48, 45, 3, 4];
const C = [0, 1];
