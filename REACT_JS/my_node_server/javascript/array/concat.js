const mousquetaires = ["Athos", "Porthos", "Aramis"];
const extras = ["d'Artagnan", "Albert"];

console.log(mousquetaires.concat(extras));

// autre manière d'obtenir la liste des 5 mousquetaires
console.log([].concat(mousquetaires, extras));
