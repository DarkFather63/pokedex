## Pokemon App

This is a pokemon app!

###### DESCRIPTION:
An app to be used as an index to find pokemon and retrieve some of their information. More information for pokemon will be added in the future.

My task was the development of this app using minimal HTML and CSS and mostly relying on Javascript. Javascript was entirely new to me and this app was meant to reflect my new knowledge. I had to create and understand javascript elements, DOM traversal, IIFEs, functions and base functionality.

This app uses Javascript ES6 and later. 


###### USE:
This app is used based on a repository function retrieving data from an API as an IIFE. Within the IIFE are several functions that allow the app and users to access the details of pokemon, but don't allow disruption of the code that runs the app. They are:

**pokemonRepository** - The main IIFE - contains all the functions needed for the app to operate.

**getAll** - Returns the pokemon list. NOTE: all functions are used in conjunction with each other - some are written very simply so that they can be called later in combination with other functions.

**add** - Allows the addition of pokemon, primarily from the API. They are restricted based on formatting, particularly object formatting.

**addListItem** - Adds elements to the DOM via bootstrap (see classes added and elements appended), mainly buttons and their content. It then calls on the showDetails function to load the pokemon details to a modal, which is in the showModal function further down in the code. It also adds some styling.

**loadList** - Retrieves the pokemon list information from the pokeAPI. *This isn't referring to the list that we show in the app or reference in our DOM, merely the array and objects in the API.* It also uses dot notation to access the links to each pokemon's details.

**loadDetails** - Refers to the loadList function variables and gets the details information from the API for each individual pokemon. This will be added to later, as it doesn't allow for pokemon types to be added yet. They need to be looped through first and returned separately.

**showModal** - Using bootstrap's modal properties, constructs a modal to display the pokemon information. It also uses jQuery code.

The API: A pokemon open-source API, at https://pokeapi.co/api/v2/pokemon/?limit=150 . This only shows 150 pokemon - change the number after 'limit=' to any number if you want to see more or less. The pokemon are in the order written in the API, though, so it will only add or subtract those that are later in the API.

jQuery library: jquery-3.6.0.min.js (see files).

Bootstrap is linked in the main html pages (bottom of the code, before the Javascript).
