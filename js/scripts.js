//creates a data array storing pokemon data
//added IIFE 

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
		}
	};


})()

//second data array for storing pokemon (and for trying functions)
/*let pokemonList2 = [
{ name: 'Ivysaur', type: ['grass', 'poison'], height: 1} ,
{ name: 'Onix', type: ['rock', 'ground'], height: 10} ,
{ name: 'Piplup', type: 'water', height: 0.5} ,
{ name: 'Musharna', type: 'psychic', height: 3}
];*/


pokemonList.forEach(function(pokemon){
	if (pokemon.height < 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type + '<br/>');
} else if(pokemon.height > 5){
	document.write(pokemon.name + ' (height: ' + pokemon.height + '),' + ' type: ' + pokemon.type  + ' Wow, that\'s big!' + '<br/>')
}
});

//list of pokemon and their height, with largest noted under conditional - also using loop

/* for (let i=0; i < pokemonList.length; i++)
	if(pokemonList[i].height < 4){
		document.write(pokemonList[i].name + '( height: ' + pokemonList[i].height + ')' + '<br/>')
	} else if(pokemonList[i].height > 3){
		document.write(pokemonList[i].name + '( height: ' + pokemonList[i].height + ')' + '-Wow, that\'s big!' + '<br/>')
	} ;
*/

//testing function:

/*function printArrayDetails(list) {
	for (let i=0; i < list.length; i++)
		if (list[i].height < 4) {
			document.write(list[i].name + ' (height:' + list[i].height + ') ' + '<br/>')
		} else if (list[i].height > 5){
			document.write(list[i].name + ' (height:' + list[i].height + ') ' + ' Wow, that\'s big!' + '<br/>')
		};
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2); */


//testing / trying out basic function - can ignore
/*function divide(dividend, divisor) {
	if (divisor === 0) {
		return 'You are trying to divide by zero.'
	} else {
		let result = dividend/divisor;
		return result;
	}
}

console.log(divide(10, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));*/



