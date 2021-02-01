/**
 * Données entrées par l'utlisateur
 */
// Initialisation
var avant_dernier_match;
var dernier_match;

/**
 * Données du Favori
 */
var dernier_match_Favori = "O";
var avant_dernier_match_Favori = "G";

/**
 * Données du Outsider
 */
var dernier_match_Outsider = "D";
var avant_dernier_match_Outsider = "V";
/**
 * Création d'une classe représentant une équipe
 */
class Equipe {
  constructor(dernier_match, avant_dernier_match) {
    this.dM = dernier_match;
    this.AdM = avant_dernier_match;
  }
  statutdM() {
    if (this.dM.toString() === "V") {
      return 1;
    } else if (this.dM != "V") {
      return -1;
    }
    // return (this.dM = dernier_match === "V" ? 1 : -1);
  }
  statutAdM() {
    this.AdM = avant_dernier_match != "V" ? -1 : 1;
    return this.AdM;
  }

  resultatFav() {
    const x = this.statutdM();
    const y = this.statutAdM();

    return x + y;
  }
}
/**
 *  Sorties concernant l'équipe favorite
 */
const favori = new Equipe(dernier_match_Favori, avant_dernier_match_Favori);

console.log(
  ` dernier match Favori: ${favori.dM} 
    statut Fav: ${favori.statutdM()} 
   `
  //, avant dernier match Favori : ${
  //     favori.AdM
  //   } ,statut Fav: ${favori.statutAdM()}
);
// console.log(`le résultat final : ${favori.resultatFav()}`);
/**
 *  Sorties concernant l'équipe Outsider
 */
const outsider = new Equipe(
  dernier_match_Outsider,
  avant_dernier_match_Outsider
);

console.log(
  ` dernier match outsider: ${outsider.dM} 
  `
  //, statut Fav: ${outsider.statutdM()} , avant dernier match outsider : ${
  //     outsider.AdM
  //   } ,statut Fav: ${outsider.statutAdM()}
);
// console.log(`le résultat final : ${outsider.resultatFav()}`);
