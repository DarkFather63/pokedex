//creates a data array storing pokemon data
//added IIFE function
//created functions in IIFE that are globally accessible while limiting access 

let pokemonRepository = (function(){

	let pokemonList = [
	{ name: ' Luxray ', 
	type: ' electric', 
	height: 2} ,

	{ name: ' Zebstrika ', 
	type: ' electric', 
	height: 2} ,

	{ name: ' Charizard', 
	type: [' electric', ' flying'], 
	height: 7} ,

	{ name: ' Gengar', 
	type: [' ghost', ' poison' ], 
	height: 3}
	];


	function getAll(){
		return pokemonList;
	};

	function add(pokemon) {
		if (typeof pokemon === 'object' && 'name' in pokemon){
			pokemonList.push(pokemon)
		} else {
			console.log('This is not the correct format for a pokemon.')
		}
	};

	function showDetails(pokemon){
		console.log(`name:${pokemon.name}, type:${pokemon.type}, height:${pokemon.height}`);
	};

	function addListener (button, pokemon){
		button.addEventListener('click', function(){
			showDetails(pokemon);
		})
	};

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem
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
		addListener(button, pokemon);
	}


})();

pokemonRepository.getAll().forEach(function (pokemon){

	pokemonRepository.addListItem(pokemon);
});





