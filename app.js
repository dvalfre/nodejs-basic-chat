var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

// Configure app
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
app.get('/', function(req, res) {
  res.render('index');
});


http.listen(port, function() {
  console.log("Express server listening on %d in %s mode", port, app.settings.env);
});
