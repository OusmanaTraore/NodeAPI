// const p = "<====================>";
// // // var candidat = ["Item 1", "Item 3", "Item 5", "Item 7", "Item 9", "Item 11"];
// // // let recruiter = ["Item 2", "Item 4", "Item 6", "Item 8", "Item 10", "Item 12"];

// // // Here's 4 different ways
// // // for (let index = 0; index < array.length; index++) {
// // //   console.log(array[index]);
// // // }

// // function Call(elt) {
// //   for (let index in elt) {
// //     console.log(elt[index]);
// //   }
// // }
// // // Call(candidat);
// // // Call(recruiter);
// // function superCall(elt, elt2) {
// //   elt.forEach((item) => {
// //     // console.log(item);
// //     elt2.forEach((item2) => {
// //       console.log(item2);
// //     });
// //   });
// // }
// // superCall(candidat, recruiter);
// // candidat.forEach(function (caractere) {
// //   alert(caractere);
// // });

// // var array = ["hello", "world"];

// array.forEach((item) => {
//   console.log(item);
// });
// var txt = "";
// var numbers = [45, 4, 9, 16, 25];

// array / reduce.js;

// const stats = [2, 4, 6, 10];

// const sum = (previous, element) => previous + element;
// image;

// console.log(stats.reduce(sum, 0));

// array / filter.js;

// const values = [null, "un", "deux", 3];

// const is_finite = (value) => Number.isFinite(value);
// const direct = (value) => value;

// console.log(values.filter(is_finite));
// image;
// console.log(values.filter(direct));

// array/index-of-includes.js

// const soundcheck = ['un', 'deux', 'un', 'deux'];

// console.log(soundcheck.indexOf('un'));        image
// console.log(soundcheck.indexOf('deux'));      image
// console.log(soundcheck.indexOf('trois'));     image

// console.log(soundcheck.lastIndexOf('deux'));  image

// console.log(soundcheck.includes('deux'));     image
// console.log(soundcheck.includes('trois'));

// array / find.js;

// const values = [null, 2, 10, 100];

// const biggerThan50 = (value) => value > 50;
// image;

// console.log(values.find(biggerThan50));
// image;
// console.log(values.findIndex(biggerThan50));

// array / some.js;

// const values = [1, "a", 120, undefined, 4];
// const isUndefined = (value) => value === undefined;

// console.log(values.every(isUndefined));
// image;
// console.log(values.some(isUndefined));
// image;
// console.log(values.filter((d) => d).some(isUndefined));

// array / destructuring.js;

// const weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

// const [first, second] = weekdays;
// console.log(first);
// image;
// console.log(second);
// image;

// const [, , third] = weekdays;
// console.log(third);

// array/destructuring-rest.js

// const weekdays = [
//   'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'
// ];

// const [first, second, ...rest] = weekdays;
// console.log(rest);                  image

// // revient au même que
// // const [,, ...rest] = weekdays;

// array / slice.js;

// const values = ["un", "deux", "trois", "quatre"];

// console.log(values.slice(1));
// image;
// console.log(values.slice(1, 2));

// array / slice - negative.js;

// const values = ["un", "deux", "trois", "quatre"];

// console.log(values.slice(-1));
// image;
// console.log(values.slice(-3));
// image;

// console.log(values.slice(0, -1));
// image;
// console.log(values.slice(0, -3));
