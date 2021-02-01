// Importation des dépendances

const express = require("express");
const app = express();

//Définition du port d'écoute de l'application
app.listen(82, () => {
  console.log("REST API via ExpressJS");
});
