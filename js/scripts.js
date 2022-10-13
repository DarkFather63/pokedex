//created pokemon IIFE - it's long but accessible where needed

let pokemonRepository = (function() {
  let pokemonList = [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  //allows addition of pokemon - restricted if they don't fit the format
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("This is not the correct format for a pokemon.");
    }
  }


  //DOM manipulation - adds elements using bootstrap, appends them to elements on the dom, then applies a function
	//to load the information from the showDetails function (which loads information from the API and shows the modal).

  function addListItem(pokemon) {
    let pokemonUnorderedList = document.querySelector(".pokemon-list");
    let unorderedListItem = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;

    button.classList.add("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("col");

    unorderedListItem.classList.add("list-item");
    unorderedListItem.appendChild(button);
    unorderedListItem.classList.add("group-list-item");

    pokemonUnorderedList.appendChild(unorderedListItem);

    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  //fetches API info using json

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }


  //loads details from API, from url at beginning of code

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.types = details.types.typename;
      })
      .catch(function(e) {
        console.error(e);
      });
  }


  //adds modal to each button with pokemon content, and allows for modal to be hidden and shown via button and click - uses bootstrap

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    let pokemonImage = $('<img class="modal-img" style="width:50%">');

    pokemonImage.attr("src", pokemon.imageUrl);

    let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

    let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

    let typeElement = $("<p>" + "Type: " + pokemon.types + "<p>");

    modalTitle.append(nameElement);
    modalBody.append(pokemonImage);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);

    $("#pokemon-modal").modal("toggle");
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//final calling of functions to execute repository
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
