// Import statements
var request = require('request');
 
// Pretty print json
function printJson(parsed) {
  console.log(JSON.stringify(parsed, null, 2));
}

// Helper function to get a pokemon with the given number
function getPokemon(pokemonNumber) {
  var apiEndpoint = 'http://pokeapi.co/api/v2/pokemon/' + pokemonNumber + '/';
  request(apiEndpoint, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parsed = JSON.parse(body); // Convert from string to json
      printJson(parsed);
    }
  });
}

// Act
getPokemon(1);