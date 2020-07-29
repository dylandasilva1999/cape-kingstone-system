var path = require('path');
var express = require('express');
var app = express();
var port = 8000;
var logger = require('./logger');

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
})