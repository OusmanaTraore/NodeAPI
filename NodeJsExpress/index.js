const express = require("express");
const app = express();

//Middleware
app.use(express.json());

const equipes = require("./equipes.json");

app.listen(85, () => {
  console.log("Rest Api via Express");
});

/**
 * Création de route vers l'équipe
 */
app.get("/equipes", (req, res) => {
  //   res.send("Liste des équipes");
  res.status(200).json(equipes);
});

// Routes /equipes/:id
app.get("/equipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const equipe = equipes.find((equipes) => equipe.id === id);
  res.status(200).json(equipe);
});

//Routes post pour poster des data vers le serveur

app.post("/equipes", (req, res) => {
  equipes.push(req.body);
  res.status(200).json(equipes);
});

//Routes pour ajouter
addEventListener.put("/equipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let equipe = equipes.find((equipe) => equipe.id === id);
  equipe.name = req.body.name;
  equipe.country = req.body.country;
  res.status(200).json(equipe);
});

//Routes delete
app.delete("/equipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let equipe = equipes.find((equipe) => equipe.id === id);
  equipes.splice(equipes.indexOf(equipe), 1);
  res.status(200).json(equipes);
});

/**
 * Operation CRUD pour l'entree Joueur
 */
