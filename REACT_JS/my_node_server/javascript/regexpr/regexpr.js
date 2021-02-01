const swiftCode = "BARCGB22";

console.log(swiftCode.padEnd(11, "X"));
console.log(swiftCode.padStart(11, "X"));
==>
const text = "I image Node.js & Anode";

console.log(text.match(/node/i));
console.log(text.match(/ode/g));
console.log(text.match(/node/gi));

=>
const paris15 = "75015 Paris";
const avray = "92410 Ville-d'Avray";

// test du code postal uniquement
console.log(paris15.match(/[0-9]{4}/));
console.log(paris15.match(/[0-9]{2,5}/));

// test du code postal et de la ville
console.log(paris15.match(/[0-9]{5} [a-zA-Z]+/));
console.log(paris15.match(/[0-9]{5} [a-z]+/i));

// test sur un nom de ville composé
console.log(avray.match(/[0-9]{5} [a-z]+/i));
console.log(avray.match(/[0-9]{5} [a-z'-]+/i));

const postcode = "75015 Paris";
const cedex = `CODEPOSTAL VILLE CEDEX
33900 Bordeaux Cedex 9
33074 BORDEAUX CEDEX
33700 MERIGNAC Cidex 40`;

const nogroup = /^[0-9]{5} [a-z0-9' -]+/i;
const group = /^([0-9]{5}) [a-z0-9' -]+/i;

// avec ou sans groupe de capture
console.log(postcode.match(nogroup));
console.log(postcode.match(group));

// mode multiligne avec ou sans option globale
console.log(cedex.match(/^([0-9]{5})/im));
console.log(cedex.match(/^([0-9]{5})/gim));

const cedex = `CODEPOSTAL VILLE CEDEX
33900 Bordeaux Cedex 9
33074 BORDEAUX CEDEX
33700 MERIGNAC Cidex 40`;

const postcode_tester = /^\d{5}\s/m;

if (postcode_tester.test(cedex)) {
  console.log(cedex.match(/^(\d{5})\b/gm));
}
const t = "I image JavaScript";

console.log(t.replace("image", "love"));
console.log(t.replace(/\b\w+$/, "PHP"));

const text = t.replace(/^.+(\u{2665}) (\w+)$/u, "$2 $1 me");
console.log(text);
