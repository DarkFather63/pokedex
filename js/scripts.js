//creates a data array storing pokemon data
//added IIFE function

let pokemonRepository = (function(){

	let pokemonList = [
	{ name: ' Luxray ', type: ' electric', height: 2} ,
	{ name: ' Zebstrika ', type: ' electric', height: 2} ,
	{ name: ' Charizard', type: [' electric', ' flying'], height: 7} ,
	{ name: ' Gengar', type: [' ghost', ' poison' ], height: 3}
	];


	function getAll(){
		return pokemonList;
	};

	function add(pokemon) {
		return pokemonList.push({pokemon})
	};

	return {
		getAll: getAll,
		add: add
	};


})();

pokemonRepository.getAll().forEach(function (pokemon){
	if (pokemon.height > 4){
	document.write(`${pokemon.name}, type:${pokemon.type}, height:${pokemon.height} - Wow that's big! </br>`);
	} else {
	document.write(`${pokemon.name}, type:${pokemon.type}, height:${pokemon.height}, </br>`)
	}
});





