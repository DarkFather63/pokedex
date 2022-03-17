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
		getAll: function(){
			return pokemonList;
		},
		add: function(){
			pokemonList.push(pokemon)
		}

	};


})();

//trying to access IIFE with forEach - this is still unfinished!!

pokemonRepository.getAll().forEach(function(pokemon){
	document.write(pokemon.pokemonList)
});


//pokemon forEach loop - not yet edited for IIFE

pokemonList.forEach(function(pokemon){
	if (pokemon.height < 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type + '<br/>');
} else if(pokemon.height > 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type  + ' Wow, that\'s big!' + '<br/>')
}
});





