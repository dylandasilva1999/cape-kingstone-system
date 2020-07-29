var path = require('path');
var express = require('express');
var app = express();
var port = 8000;

var urlpath = path.join(__dirname, '../frontend/public/');

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