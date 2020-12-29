buf = Buffer(256);
len = buf.write("/ 0124");

console.log("Octets written : " + len);

buf2 = Buffer(26);
for (var i = 0; i < 26; i++) {
  buf2[i] = i + 97;
}
console.log("Alphabet Ascii");
console.log(buf2.toString("ascii"));
console.log("==============");
console.log("Alphabet Ascii, 5 premières lettres");
console.log(buf2.toString("ascii", 0, 5));
console.log("==============");
console.log("Encodage UTF8, 5 premières lettres");
console.log(buf2.toString("utf8", 0, 5));
console.log("==============");
console.log("Encodage par default");
console.log(buf2.toString(undefined, 0, 5));

var buf3 = new Buffer("Simply Easy Learning");
var json = buf.toJSON(buf3);
console.log(json);
