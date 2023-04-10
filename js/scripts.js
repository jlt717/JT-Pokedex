let pokemonList =
    [{ name: "Lickilicky", height: 5.6, type: "Normal", category: "Licking" },
    { name: "Vileplume", height: 3.9, type: ["Grass", "Poison"], category: "Flower" },
    { name: "Pikachu", height: 1.3, type: "Electric", category: "Mouse" },
    { name: "Caterpie", height: 1, type: "Bug", category: "Worm" },
    { name: "Jigglypuff", height: 1.7, type: ["Normal", "Fairy"], category: "Balloon" }];

document.write("<header>" + "Pokédex" + "</header>")
//forEach function

function myLoopFunction(pokemon) {
    document.write("<div>" + pokemon.name + "-" +  " " + "height" + ":" + pokemon.height + "," + " " + "type" + ":" + pokemon.type + "," + " " + "category" + ":" + pokemon.category + "</div>");
  }
  pokemonList.forEach(myLoopFunction);

//if (pokemonList[i].height > 5) {
//document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "Wow, that's big! </div>")
//} else if (pokemonList[i].height > 1 && pokemonList[i].height < 5) {
//document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "This one is medium. </div>")
//} else {
//document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "Just a pipsqueak! </div>")
//}} 

//Pokeball image
document.write("<img src= img/pokeball.svg>");
