const counter = 3;

console.log(counter);
console.log(counter === 3);

const check = counter === 3;

console.log(check);
console.log(check === true);

console.log(Boolean(""));
console.log(Boolean(counter));
console.log(Boolean([]));

if (counter) {
  console.log("if (counter) équivaut à if (Boolean(counter))");
}
function bool(entree1, entree2) {
  for (var i = 0; i < entree1.length; i++) {
    for (var j = 0; j < entree2.length; j++) {
      if (entree1.indexOf(i) == entree2.indexOf(j)) {
        // entree1.forEach((element) => {
        //   console.log(element);
        // });
        console.log(entree1[i]);
        // console.log(entree2.indexOf(j));
      }
    }
  }
}

bool(A, B);
const book = {
  title: "Node.js",
  published: true,
};
if (book.published && book.title) {
  console.log("Le livre est publié avec un titre.");
} else if (book.published) {
  console.log("Le livre est publié (sans titre).");
} else {
  console.log("Le livre n'est pas publié.");
}
