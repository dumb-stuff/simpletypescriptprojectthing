"use strict";
exports.__esModule = true;
var request = require("request");
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    console.log("You can copy this link and paste it in your browser: ".concat(request.get('https://redirect.rukchadisa.live/add?url=http://localhost:3000')));
});
