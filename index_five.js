// Import statements
var request = require('request');

// Pretty print json
function printJson(parsed) {
  console.log(JSON.stringify(parsed, null, 2));
}

function printPokemonFact(pokemon) {
  var randomMoveIndex = Math.floor(Math.random() * pokemon.moves.length);
  var randomMove = pokemon.moves[randomMoveIndex];
  console.log("Did you know: " + pokemon.name +
    " learns " + randomMove.move.name +
    " at level " + randomMove.version_group_details[0].level_learned_at);
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

function getRandomPokemonFact() {
  var randomNumber = Math.random() * 150 + 1;
  getPokemon(Math.floor(randomNumber), function(pokemon) {
    printPokemonFact(pokemon);
  });
}

// Act
getRandomPokemonFact();