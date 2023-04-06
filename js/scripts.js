let pokemonList =
    [{ name: "Lickilicky", height: "5 feet 7 inches", type: "Normal", category: "Licking" },
    { name: "Vileplume", height: "3 feet 11 inches", type: ["Grass", "Poison"], category: "Flower" },
    { name: "Pikachu", height: "1 foot four inches", type: "Electric", category: "Mouse" },
    { name: "Caterpie", height: "1 foot", type: "Bug", category: "Worm" },
    { name: "Jigglypuff", height: "1 foot eight inches", type: ["Normal", "Fairy"], category: "Balloon" }];

//for loop for pokemonList with conditional of heights returning a specific message
document.write("<header>" + "Pokédex" + "</header>")
for (let i = 0; i < pokemonList.length; i++)
    if (pokemonList[i].height > "5 feet") {
        document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "Wow, that's big! </div>")
    } else if (pokemonList[i].height > "1 foot" && pokemonList[i].height < "5 feet") {
        document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "This one is medium. </div>")
    } else {
        document.write("<div>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " " + "Just a pipsqueak! </div>")
    }
//Pokeball image
    document.write("<img src= img/pokeball.svg>")
