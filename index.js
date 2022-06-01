let message = ""
require('dotenv').config()
const express = require("express");
const port = process.env.PORT || 3000;
const res = require("express/lib/response");
const app = express();
const path = require("path");
const { runInNewContext } = require("vm");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Butterfree",
    tipo: "Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    descricao: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    altura: 1.1 + "m",
    peso: 32 + "kg",
    habilidade: "Compound Eyes",
    categoria: "Butterfly",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: 0.6 + "m",
    peso: 8.5 + "kg",
    habilidade: "Blaze",
    categoria: "Lizard",
  },
  {
    id: 3,
    nome: "Pikachu",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura: 0.4 + "m",
    peso: 6.0 + "kg",
    habilidade: "Static",
    categoria: "Mouse",
  },

];

let pokemon = undefined;

app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon});
});

app.get("/pokemon", (req, res) => {
  res.render("pokemon", { pokedex, pokemon , message });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  message = `Pokemon criado com sucesso`
  res.redirect("/pokemon#cards");
  


});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find(pokemon => pokemon.id === id);
  res.redirect("/#cadastro");
})

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  message = `Pokemon atualizado com sucesso`

  res.redirect("/pokemon#cards");

})

app.get("/delete/:id", (req, res) => {

  const id = +req.params.id - 1;


  delete pokedex[id];
  message = `Pokemon apagado com sucesso`


  res.redirect("/pokemon#cards");

})
app.listen(port, () => {

  console.log(`Servidor rodando em http://localhost:${port}`); 

});



