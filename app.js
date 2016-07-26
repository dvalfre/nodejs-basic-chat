var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('<h1>Hello Engine Yard Cloud!</h1>');
});

http.listen(port, function() {
  console.log("Express server listening on %d in %s mode", port, app.settings.env)
});
