var buffer1 = Buffer.from("tutorialpoint");
var buffer2 = Buffer.from("pointtutorial");
var buffer3 = Buffer.concat([buffer1, buffer2]);
var buf1R = buffer1.toJSON();

console.log(buf1R);

// console.log(` buffer3 content: ${buffer3.toString()}`);

// Comparaison de buffers

var result = buffer1.compare(buffer2);

// console.log(result);

// if (buffer1.length < buffer2.length) {
//   console.log(
//     ` La taille du buffer1 : <<${buffer1}>> est inférieur à celle du buffer2 : <<${buffer2}>>`
//   );
//   //   console.log(buffer1.toJSON());
//   var buffresult = 0;
//   for (var i = 0; i < buffer1.length; i++) {
//     // console.log(i + 1);
//     console.log(buffer1[i]);
//     buffresult += buffer1[i];
//   }
//   console.log(
//     `La somme des caractères en code Asccii du buffer1 est :${buffresult}`
//   );

// }
// function SommeCodeAscii(buf) {
//   var buffresult = 0;
//   for (var i = 0; i < buf.length; i++) {
//     buffresult += buf[i];
//   }
//   console.log(buffresult);
//   return `La somme des caractères en code Asccii du buffer1 est :${buffresult}`;
// }

// SommeCodeAscii(buffer2);
function SommeCodeAscii2(buf1, buf2) {
  var buffresult1 = 0;
  var buffresult2 = 0;
  for (var i = 0; i < buf1.length; i++) {
    buffresult1 += buf1[i];
  }
  for (var j = 0; j < buf2.length; j++) {
    buffresult2 += buf2[j];
  }
  if (buffresult1 < buffresult2) {
    console.log(`Le "${buf1}" est inférieur au "${buf2}"`);
  } else if (buffresult1 === buffresult2) {
    console.log(`Le "${buf1}" est équivalent au "${buf2}"`);
  } else if (buffresult1 > buffresult2) {
    console.log(`Le "${buf1}" est supérieur au "${buf2}"`);
  }
  console.log(
    `Le "${buf1}" vaut : ${buffresult1} , le "${buf2}" vaut : ${buffresult2}`
  );
  //   console.log(`Les éléments du ${buf1} : ${buf1R}`);
}
SommeCodeAscii2(buffer1, buffer2);
// } else if(buffer1.length === buffer2.length ) {
/**
 *
 *  */ //   console.log(` La taille du buffer1 : <<${buffer1}>> est égale à celle du buffer2 : <<${buffer2}>>`);
// } else (buffer1.length > buffer2.length ) {
//     console.log(` La taille du buffer1 : <<${buffer1}>> est supérieure à celle du buffer2 : <<${buffer2}>>`);
