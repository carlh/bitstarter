var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));
app.use(express.favicon(__dirname + '/public/img/favicon.ico'));

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('public/src/index.html');
    response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
