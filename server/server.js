var path = require('path');
var express = require('express');
var app = express();
var port = 8000;
var authenticator = require('./authenticator');
var logger = require('./logger');
var data = require('./data');

var urlpath = path.join(__dirname, '../frontend/build/');

app.use(logger);
app.use(express.static(urlpath));
app.use(authenticator);

app.param('subject', function (request, response, next) {
    request.lowerName = request.params.subject.toLowerCase();
    next();
});

/*
1. List of all the classes
*/
app.get('/api/classes/', function (request, response) {
    response.json(data.classes);
});

/*
2. Details of particular class
    a. The teacher of the class
    b. The students in the class
    c. The time of the class (Day and period)
    d. The classroom number
*/
app.get('/api/teachers/:id', function (request, response) {
    var results = [];
    // var lowerName = request.params.name.toLowerCase();
    for (var i = 0; i < data.classes.length; i++) {
      if (data.classes[i].id === data.teachers[i].classes) {
        results.push(data.classes[i]);
      }
    }
    response.json(results);
});

/*
4. The Subject
*/
app.get('/api/classes/:subject', function (request, response) {
    var subject = [];

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].subject === request.lowerName) {
            subject.push(data.classes[i]);
        }
    }
    response.json("The subject is: " + subject);
});

/*
5. A list of classes taught by a particular teacher
*/
app.get('/api/teachers/:id/classes', function (request, response) {
    var teacherName = "";
    var teacherNumClasses = [];
    var teacherSubjectNames = [];
    var id = request.params.id;
    
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            teacherNumClasses = data.teachers[i].classes;
            teacherName = data.teachers[i].name;
        }  
    }

    for (var i = 0; i < data.classes.length; i++) {
        if (teacherNumClasses[i] === data.classes[i].id) {
            teacherSubjectNames.push(data.classes[i].subject); 
        }  
    }

    response.json("Teacher with ID " + id + " is " + teacherName + " who teaches these classes: " + teacherNumClasses + " which are " + teacherSubjectNames);
    
});

/*
6. A list of classes taken by a particular learner
*/
app.get('/api/learners/:id/classes', function (request, response) {
    var learnerName = "";
    var learnerClasses = [];
    var learnerSubjects = [];
    var id = request.params.id;
    
    for (var i = 0; i < data.learners.length; i++) {
        if (data.learners[i].id === parseInt(id)) {
            learnerClasses = data.learners[i].classes;
            learnerName = data.learners[i].name;  
        }
        learnerSubjects.push(data.classes[i].subject); 
    }
    response.json("Learner with ID " + id + " is " + learnerName + " who takes these classes: " + learnerClasses);
    
});

/*
7. A user id when a valid email and password are supplied
*/
app.get('/api/learners/:id/classes', function (request, response) {
    var learnerName = "";
    var learnerClasses = [];
    var learnerSubjects = [];
    var id = request.params.id;
    
    for (var i = 0; i < data.learners.length; i++) {
        if (data.learners[i].id === parseInt(id)) {
            learnerClasses = data.learners[i].classes;
            learnerName = data.learners[i].name;  
        }
        learnerSubjects.push(data.classes[i].subject); 
    }
    response.json("Learner with ID " + id + " is " + learnerName + " who takes these classes: " + learnerClasses);
    
});

app.get('/home', (request, response) => {
    response.redirect(301, '/');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});