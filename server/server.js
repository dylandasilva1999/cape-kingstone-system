var path = require('path');
var express = require('express');
var app = express();
var port = 8000;
var logger = require('./logger');
var data = require('./data');

var urlpath = path.join(__dirname, '../frontend/build/');

app.use(logger);
app.use(express.static(urlpath));

/*

API CALLS 

app.get('/api/categories', (request, response) => {
    var categories = ['aerobic', 'strength', 'balance', 'flexibility'];
    response.json(categories);
});
*/

app.get('/home', (request, response) => {
    response.redirect(301, '/');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

/*
List of all the classes
*/
app.get('/api/classes/', function (request, response) {
    response.json(data.classes);
});

/*
Details of particular class
a.The teacher of the class
*/
app.get('/api/classes/', function (request, response) {
    response.json(data.classes);
});