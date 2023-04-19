//IIFE and getAll and add functions
const pokemonRepository = (function () {
   let pokemonList = [];

   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


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
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
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
   function showModal(pokemon) {
      // let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';
      console.log("pokemon:", pokemon)
      

      let modal = document.createElement('div');
      modal.classList.add('modal');
      let image = document.createElement("img")
      image.src = pokemon.imageUrl
      image.setAttribute('height', 200);
      image.setAttribute('width', 200);
      modalContainer.appendChild(image)

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.innerText = (pokemon.name);

      let contentElement = document.createElement('p');
      contentElement.innerText = 'height:' + '' + (pokemon.height);
      

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
      

     // modalContainer.classList.remove('non-visible');
      modalContainer.classList.add('is-visible');

      document.querySelector('#show-modal').addEventListener
     ('click', () => {
         showModal(item);
      });
   }

   function hideModal() {
      modalContainer.classList.remove('is-visible');
   }

   window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
         hideModal();
      }
   });

   modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
         hideModal();
      }
   });



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


//Pokeball image

document.write("<img src= img/pokeball.svg>")
