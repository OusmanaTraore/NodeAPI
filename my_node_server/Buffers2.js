// // Création d'un buffer en allouant un espace de 1024 octets (toutes les données allouées sont en binaires)
// const filledBuf = Buffer.alloc(1024, 1);

// //  Création d'un buffer de 5 octets stockant uniquement des caractères ASCII
// const asciiBuf = Buffer.alloc(5, "a", "ascii");

// /*
// * Codages de caractère acceptés par Node.js
//  ACII, 'ascii'
//  UTF-8, 'utf-8' ou 'utf8'
//  UTF-16, 'utf-16le' ou 'utf16le'
//  UCS-2, 'ucs-2' ou 'ucs2'
//  Base64, 'base64
//  Hexadecimal, 'hex'
//  ISO/IEC 8859-1 , 'latin' ou 'binary'
// */

// // Création d'un buffer à partir de données existantes
// //  pour cela nous utilisons la méthiode from()

// // Exemple création d'un buffer à partir d'une chaine
// const stringBuf = Buffer.from("My name is Ousmana");

// // Buffer créer à partir d'un autre buffer pré-éxistant
// const asciCopy = Buffer.from(asciiBuf);

// /**
//  * Lecture des buffers
//  */
// const hiBuf = Buffer.from("HI Ousmana             !");
// // console.log(hiBuf[2]);
// // console.log(hiBuf);
// // console.log("===============");
// // console.log(hiBuf.toString());
// // console.log("===============");
// // console.log(hiBuf.toString("hex"));
// // console.log("===============");
// // console.log(hiBuf.toString("hex"));
// // console.log("===============");
// // console.log(hiBuf.toString("utf8"));
// // console.log("===============");
// // console.log(hiBuf.toString("ucs2"));
// // console.log("===============");
// // console.log(hiBuf.toString("base64"));
// // console.log("===============");
// // console.log(hiBuf.toJSON());
// // Modification d'un buffer

// // console.log("===============");
// hiBuf[1] = "p";
// console.log(hiBuf.toJSON());
// console.log("===============");
// console.log(hiBuf.toString("binary"));
// console.log("===============");
// hiBuf[1] = 101;
// console.log(hiBuf.toString());
// // Modifier le buffer avec la méthode write
// console.log("===============");
// hiBuf.write("Hello");
// console.log(hiBuf.toString());
// hiBuf.write("Hello you ");
// console.log(hiBuf.toString());
// hiBuf.write("Hello you ,how are you ");
// console.log(hiBuf.toString());

const wordsBuf = Buffer.from("Banana Nannanana");
const catchphraseBuf = Buffer.from("Not sure Turtle!");

wordsBuf.copy(catchphraseBuf);
console.log(catchphraseBuf.toString());
catchphraseBuf.write("Not sure , you Turtle!");
console.log(catchphraseBuf.toString());
wordsBuf.copy(catchphraseBuf, 0, 7, wordsBuf.length);
console.log(catchphraseBuf.toString());
