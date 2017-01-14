// Import statements
var request = require('request');

// Pretty print json
function printJson(parsed) {
  console.log(JSON.stringify(parsed, null, 2));
}

function getRandomMoveFact(pokemon) {
  var randomMoveIndex = Math.floor(Math.random() * pokemon.moves.length);
  var randomMove = pokemon.moves[randomMoveIndex];
  return "Did you know: " + pokemon.name +
    " learns " + randomMove.move.name +
    " at level " + randomMove.version_group_details[0].level_learned_at;
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

function getRandomPokemonFact(callback) {
  var randomNumber = Math.random() * 150 + 1;
  getPokemon(Math.floor(randomNumber), function(pokemon) {
    callback(getRandomMoveFact(pokemon));
  });
}

// Act
// Twilio Credentials
var accountSid = 'AC36a8d507914596be67988bfaf82f91d9';
var authToken = '5328a8d08057724b10c2a8b806ffab84';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

getRandomPokemonFact(function(fact) {
  client.messages.create({
      to: '4344202952',
      from: '15408742011',
      body: fact,
  }, function (err, message) {
      console.log(message.sid);
  });
});