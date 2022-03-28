//creates a data array storing pokemon data
//added IIFE function
//created functions in IIFE that are globally accessible while limiting access 

let pokemonRepository = (function(){

	let pokemonList = [];

	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function getAll(){
		return pokemonList;
	};

	function add(pokemon) {
		if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon){
			pokemonList.push(pokemon)
		} else {
			console.log('This is not the correct format for a pokemon.')
		}
	};

	function showDetails(pokemon){
			loadDetails(pokemon).then(function () {
	    console.log(pokemon);
	  });
	};	

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

	function addListener (button, pokemon){
		button.addEventListener('click', function(){
			showDetails(pokemon);
		})
	};

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

	function loadDetails(item) {
	    let url = item.detailsUrl;
	    return fetch(url).then(function (response) {
	      return response.json();
	    }).then(function (details) {
	      item.imageUrl = details.sprites.front_default;
	      item.height = details.height;
	      item.types = details.types;
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






