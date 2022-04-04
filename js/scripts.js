//created functions in IIFE that are globally accessible while limiting access 

let pokemonRepository = (function(){

	let pokemonList = [];

	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function getAll(){
		return pokemonList;
	};

//allows addition of pokemon - restricted if they don't fit the format
	function add(pokemon) {
		if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon){
			pokemonList.push(pokemon)
		} else {
			console.log('This is not the correct format for a pokemon.')
		}
	};

//adds modal to each button with pokemon content, and allows for modal to be hidden and shown via button and click

	function showDetails(pokemon, content){
		loadDetails(pokemon).then(function () {
	    let modalContainer = document.querySelector('#pokemon-modal-container');
	    modalContainer.classList.add('is-visible');

	    

	    modalContainer.innerHTML = '';

	    let modal = document.createElement('div');
	    modal.classList.add('pokemon-modal');

	    let closeButtonElement = document.createElement('button');
	    closeButtonElement.classList.add('pokemon-modal-close');
	    closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideModal);

	    let titleElement = document.createElement('h2');
	    titleElement.innerText = pokemon.name;

      let contentElement = document.createElement('p');
      contentElement.innerText = `Height: ${pokemon.height}, Type: ${pokemon.types}`;

      let pokemonImage = document.createElement('img');
      pokemonImage.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(pokemonImage);
      modal.appendChild(contentElement);  
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');

      document.querySelector('.button').addEventListener('click', (function(){
        showDetails(pokemon, (loadDetails(pokemon)));
      }));

      function hideModal(){
        modalContainer.classList.remove('is-visible');
      };

      window.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
          hideModal();
        }
      });

      modalContainer.addEventListener('click', function(e){
        let target = e.target;
        if (target === modalContainer){
          hideModal();
        };
      });

	  });
	};	

//DOM manipulation - turns list into buttons and adds to it using variables, querySelector, createElement, and an event listener.

	function addListItem(pokemon) {
		let pokemonUnorderedList = document.querySelector('.pokemon-list');
		let unorderedListItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button');
		unorderedListItem.classList.add('list-item')
		unorderedListItem.appendChild(button);
		pokemonUnorderedList.appendChild(unorderedListItem);
		button.addEventListener('click', function(event){
			showDetails(pokemon);
		})
	};


	//calls on the showDetails function above (which also has modal properties)

	function addListener (button, pokemon){
		button.addEventListener('click', function(){
			showDetails(pokemon);
		})
	};


//fetches API info

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
	  };

//loads API, from url at beginning of code

	function loadDetails(pokemon) {
	    let url = pokemon.detailsUrl;
	    return fetch(url).then(function (response) {
	      return response.json();
	    }).then(function (details) {
	      pokemon.imageUrl = details.sprites.front_default;
	      pokemon.height = details.height;
	      pokemon.types = details.types;
	    }).catch(function (e) {
	      console.error(e);
	    });
	  };

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails
	};


})();

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function (pokemon){

		pokemonRepository.addListItem(pokemon);
	});
});






