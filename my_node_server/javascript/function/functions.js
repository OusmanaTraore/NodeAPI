function sayHello(name, age) {
  document.write(`${name} a ${age} ans`);
  //   return `${name} a ${age} ans`;
}
// document.write(sayHello(Ali, 45));

// Fonction qui change le texte d'un paragraphe
const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "I was changed with an inline event handler!";
};
const button = document.querySelector("button");
button.onclick = changeText();
window.onload = button;
