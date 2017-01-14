// Import statements
var request = require('request');

function printPokemon(pokemon) {
  console.log(pokemon.name);
}

// Helper function to get a pokemon with the given number
function getPokemon(pokemonNumber, callback) {
  var apiEndpoint = 'http://pokeapi.co/api/v2/pokemon/' + pokemonNumber + '/';
  request(apiEndpoint, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parsed = JSON.parse(body); // Convert from string to json
      callback(parsed);
    }
  });
}

function getRandomPokemon() {
  var randomNumber = Math.random() * 150 + 1;
  getPokemon(Math.floor(randomNumber), function(pokemon) {
    printPokemon(pokemon);
  });
}

// Act
getRandomPokemon();