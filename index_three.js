// Import statements
var request = require('request');

// Helper function to get a pokemon with the given number
function getPokemon(pokemonNumber, callback) {
  var apiEndpoint = 'http://pokeapi.co/api/v2/pokemon/' + pokemonNumber + '/';
  request(apiEndpoint, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body)); // Convert from string to json
    }
  });
}

// Act
getPokemon(1000, function(body) {
  //res.send(JSON.stringify(body, null, 2)); // Pretty print json
  console.log(JSON.stringify(body, null, 2)); // Pretty print json
});