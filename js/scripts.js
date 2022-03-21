//creates a data array storing pokemon data
//added IIFE function

let pokemonRepository = (function(){

	let pokemonList = [
	{ name: 'Luxray', type: 'electric', height: 2} ,
	{ name: 'Zebstrika', type: 'electric', height: 2} ,
	{ name: 'Charizard', type: ['electric', 'flying'], height: 7} ,
	{ name: 'Gengar', type: ['ghost', 'poison' ], height: 3}
	];


	return {
		getAll: function (){
			return (pokemonList);
		},
		add: function (pokemon){
			return pokemonList.push(pokemon)
		}

	};


})();

pokemonRepository.getAll().forEach(function getPokemonList(pokemon){
	if (pokemon.height < 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type + '<br/>');
} else if(pokemon.height > 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type  + ' -Wow, that\'s big!' + '<br/>')
}
});

console.log(pokemonRepository.getAll());









