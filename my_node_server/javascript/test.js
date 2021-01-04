function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      document.body.style.background = color;
    } else {
      document.querySelector(".div1").style.background = color;
    }
  });
}
function Entrer() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
}
function controle() {
  var saisie = document.querySelector("#input").value;
  //   alert(saisie);
  alert(`Vous avez saisie ${saisie}`);
}
// document.querySelector("#input").hide();
function afficher() {
  var saisie = document.querySelector("#input").value;
  if (saisie.length <= 0) {
    "#texte2".hide();
    // document.querySelector("#texte2").css("display", "none");
    //     "#texte2".hide();
  } else {
    document.querySelector("#texte2").value = saisie;
  }
}
