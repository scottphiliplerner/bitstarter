fs = require('fs')
buf = require('buffer')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf1 = new Buffer(fs.readFileSync('index.html','ascii'));
  response.send(buf1.toString('ascii'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
