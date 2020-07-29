var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/index.html');
});

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