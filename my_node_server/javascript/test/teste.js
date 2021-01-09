// setInterval(function () {
//   let p = "Respect de l'autre!";
//   let count = p.length;
//   for (var i = 0; i < p.length.toString() < i++; ) {
//     //     console.log(p.substring(i));
//     console.log();
//   }
//   //   console.log(p);
//   //   console.log(p.substring(count));
// }, 2000);

// console.log(p.length);
// const p = "Respect de l'autre!";
// var m = p.length;
// var success = setInterval();
// // var l = "";
// var l = new Promise(function (resolve, reject) {
//   resolve(success);
//   //   success;
// });
// for (var i = 1; i < 3 < i++; ) {
//   //   let s = p.slice(0, i);
//   //   const s = p.slice(0, m);
//   var s = p.charAt(4);
//   var l = l + s;
// }
// (() => {
//   for (var j = 0; j < m; j++) {
//     // p.charAt([j]);
//     l += p.charAt([j]).then(
//       setInterval(() => {
//         console.log(l);
//       }, 2000)
//     );
//     // mot.push(l);
//   }
// })();

async function affichage() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), 2000);
  });
  let result = await promise;
  alert(result);
}

affichage();

// async function test(){
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve('ok'),2000)
//     });
//     let result = await promise;
//     alert(result);
// }
