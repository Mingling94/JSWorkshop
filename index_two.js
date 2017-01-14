// Import statements
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var port = 8080;
app.listen(port);
console.log('Running on port: ' + port);

app.get('/google', function(req, res) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); // Show the HTML for the Google homepage.
    }
  });
});