let pokemonList = [
{ name: 'Luxray', type: 'electric', height: 2} ,
{ name: 'Zebstrika', type: 'electric', height: 2} ,
{ name: 'Charizard', type: ['electric', 'flying'], height: 7} ,
{ name: 'Gengar', type: ['ghost', 'poison' ], height: 3}
]
//creates a data array storing pokemon data

for (let i=0; i < pokemonList.length; i++)
	if(pokemonList[i].height < 4){
		document.write(pokemonList[i].name + '( height: ' + pokemonList[i].height + ')')
	} else if(pokemonList[i].height > 3){
		document.write(pokemonList[i].name + '( height: ' + pokemonList[i].height + ')' + '-Wow, that\'s big!')
	} 
	//list of pokemon and their height, with largest noted under conditional