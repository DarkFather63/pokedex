//creates a data array storing pokemon data
//added IIFE function

let pokemonRepository = (function(){

	let pokemonList = [
	{ name: 'Luxray', type: 'electric', height: 2} ,
	{ name: 'Zebstrika', type: 'electric', height: 2} ,
	{ name: 'Charizard', type: ['electric', 'flying'], height: 7} ,
	{ name: 'Gengar', type: ['ghost', 'poison' ], height: 3}
	];

	pokemonList.forEach(function getPokemonList(pokemon){
	if (pokemon.height < 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type + '<br/>');
} else if(pokemon.height > 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type  + ' Wow, that\'s big!' + '<br/>')
}
});

	return {
		getAll: function(){
			return (pokemonList.name + pokemonList.type);
		},
		add: function(pokemon){
			return pokemonList.push(pokemon)
		}

	};


})();

console.log(pokemonRepository.getAll);

//getPokemonList(pokemon);



//trying to access IIFE with forEach - this is still unfinished!!
/*
pokemonRepository.getAll().forEach(function(getAll){
	document.write(pokemonList)
});*/


//pokemon forEach loop - not yet edited for IIFE
/*
pokemonList.forEach(function(pokemon){
	if (pokemon.height < 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type + '<br/>');
} else if(pokemon.height > 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type  + ' Wow, that\'s big!' + '<br/>')
}
}); */





