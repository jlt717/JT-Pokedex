//IIFE and getAll and add functions

const pokemonRepository = (function () {
   let pokemonList = [];

   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

let pokemonSearch = document.querySelector("#pokemon-search");
   function add(pokemon) {
      pokemonList.push(pokemon);
   }

   function getAll() {
      return pokemonList;
   }
   //event listener 
   function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      listpokemon.classList.add("list-group-item");
      let button = document.createElement("button");

      button.classList.add("btn", "btn-warning");
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#exampleModal");

      button.innerText = pokemon.name;
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function () {
         showDetails(pokemon)
      })
   }
   //added loadList, LoadDetails, and showDetails functions
   function loadList() {
      return fetch(apiUrl).then(function (response) {
         return response.json();
      }).then(function (json) {
         json.results.forEach(function (item) {
            let pokemon = {
               name: item.name,
               detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
         });
      }).catch(function (e) {
         console.error(e);
      })
   }

   function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
         return response.json();
      }).then(function (details) {
         // Now we add the details to the item
         item.imageUrl = details.sprites.front_default;
         item.height = details.height;
         item.types = details.types;
      }).catch(function (e) {
         console.error(e);
      });
   }

   function showDetails(item) {
      loadDetails(item).then(function () {
         showModal(item);
      });
   }


   let modalContainer = document.querySelector('#modal-container');
   function showModal(item) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
      modalTitle.empty();
      modalBody.empty();


      modalContainer.innerHTML = '';
      console.log("pokemon:", item);
    



      let titleElement = $("<h5>" + item.name + "</h5>");
      let image = $('<img class="img" style= width:50%>');
      image.attr("src", item.imageUrl);
      let contentElement = $("<p>" + "height : " + item.height + "</p>");
      let typesElement = $("<p>" + "types : " + item.types?.map(type => type.type.name).join(",") + "</p>");

      modalHeader.append(titleElement);
      modalTitle.append(titleElement);
      modalBody.append(image);
      modalBody.append(contentElement);
      modalBody.append(typesElement);

   }

   return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal
   };

})();


pokemonRepository.loadList().then(function () {
   pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
   });
});


