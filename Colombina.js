const express = require("express");
var http = require("http");
const path = require("path");
const app = express();
const router = express.Router();

// configuracion de cloud foundry
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, "0.0.0.0", function() {
  console.log("server node starting on " + appEnv.url);
});

app.use(express.static(path.join(__dirname)));

app.use(
  router.get("/", function(req, res) {
    res.sendFile("./index.html");
  })
);

module.exports = app;