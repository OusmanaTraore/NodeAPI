//La fonction Array.from est une manière de créer un tableau à partir de quelque chose qui ressemble à un tableau.
console.log(Array.from("fromage"));

// utilisation du second argument
const uppercase = (letter) => letter.toUpperCase();
console.log(Array.from("fromage", uppercase));
const links = document.querySelectorAll("a");

console.log(Array.from(links).map((a) => a.textContent));
// parce qu'on ne peut pas faire
// links.map(a => a.textContent);
