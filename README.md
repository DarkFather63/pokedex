This is a pokemon app!

It's used based on a repository function as an IIFE. Within the IIFE are several functions that allow the app and users to access the details of pokemon, but don't allow disruption of the code that runs the app.

It also uses the pokemon open-source API, at https://pokeapi.co/api/v2/pokemon/?limit=150 . This only shows 150 pokemon - change the number after 'limit=' to any number if you want to see more or less. The pokemon are in the order written in the API, though, so it will only add or subtract those that are later in the API.

Pokemon can be added via the 'add' function included in the IIFE. They must follow the guidelines however.

Some functions are purely for the look of the website, but they all add functionality. An important one, loadDetails, takes info from the API. Another, showDetails, allows users to click the buttons and receive the pokemon's info and image.

--This README is not yet finished - more to come soon!--