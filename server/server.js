var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist/week4')));
app.use(bodyParser.json());

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});

require('./routes/api-auth.js')(app, path);