const express = require('express');
var http = require('http');
const path = require('path');
const app = express()
const router = express.Router();

var http = require('http');
var server = http.createServer(app);

server.listen(8080);

app.use(express.static(path.join(__dirname)));


app.use(router.get('/', function (req, res){
    res.sendFile('./index.html');
}))

module.exports = app;