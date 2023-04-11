//IIFE and getAll and add functions
const pokemonRepository = (function() {
    let pokemonList =
    [{ name: "Lickilicky", height: 5.6, type: "normal", category: "licking" },
    { name: "Vileplume", height: 3.9, type: ["grass", "poison"], category: "flower" },
    { name: "Pikachu", height: 1.3, type: "electric", category: "mouse" },
    { name: "Caterpie", height: 1, type: "bug", category: "worm" },
    { name: "Jigglypuff", height: 1.7, type: ["normal", "fairy"], category: "balloon" }];

    function getAll() {
       return pokemonList;
    }

    function add(pokemon) {
       pokemonList.push(pokemon);
    }

    return {
       add: add,
       getAll: getAll 
    }
}) ();

document.write("<header>" + "Pokédex" + "</header>")

//forEach function
pokemonRepository.getAll().forEach(function(pokemon){
    document.write("<div>" + pokemon.name + "-" + " " + "Height" + ":" + pokemon.height + "," + " " + "Type" + ":" + pokemon.type + "," + " " + "Category" + ":" + pokemon.category + "</div>");
});


//Pokeball image
document.write("<img src= img/pokeball.svg>")
