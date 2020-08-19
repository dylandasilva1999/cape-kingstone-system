var path = require('path');
require('dotenv').config();
var express = require('express');
var app = express();
var port = 8000;
var authenticator = require('./authenticator');
var logger = require('./logger');
var data = require('./data');
var bodyParser = require('body-parser');

var urlpath = path.join(__dirname, '../frontend/build');

app.use(logger);
app.use(express.static(urlpath));
app.use(bodyParser.json());
app.use(authenticator);

app.param('subject', (request, response, next) => {
    request.toLower = request.params.subject.toLowerCase();
    next();
});

app.get('/home', (request, response) => {
    response.redirect(301, '/');
});

app.post('/api/login', (request, response) => {
    var loginDetails = request.body;
    console.log(loginDetails);
    response.json({token: 'Some token here'});
});

app.post('/api/protected', authenticator, (request, response) => {
    response.json(request.user);
});

/*
1. List of all the classes
*/
app.get('/api/classes/', (request, response) => {
    response.json(data.classes);
});

/*
2. Details of particular class
    a. The teacher of the class
    b. The students in the class
    c. The time of the class (Day and period)
    d. The classroom number
*/
app.get('/api/classDetails/:id', (request, response) => {
    var id = request.response.id;
    var teacherName = "";
    var students = [];
    var classSlot, classTime, classNumber, className;
  
    //Getting Teacher Name of Specific Class
    for (var i = 0; i < data.teachers.length; i++) {
      for (var p = 0; p < data.teachers[i].classes.length; j++) {
        if (data.teachers[i].classes[j] === parseInt(id)) {
            teacherName = data.teachers[i].name;
        }
      }
    }
  
    //Getting Students in that Specific class
    for (var i = 0; i < data.learners.length; i++) {
      for (var p = 0; p < data.learners[i].classes.length; p++) {
        if (data.learners[i].classes[j] === parseInt(id)) {
            students.push(data.learners[i].name);
        }
      }
    }
  
    //Getting classSlot, classNumber and className of Specific class
    for (var i = 0; i < data.classes.length; i++) {
      if (data.classes[i].id === parseInt(id)) {
        classSlot = data.classes[i].slot;
        classNumber = data.classes[i].classroom;
        className = data.classes[i].subject;
      }
    }
  
    //Getting classTime of the Specific class
    for (var i = 0; i < data.slots.length; i++) {
      if ((data.slots[i].slot = slot)) {
        for (var p = 1; p < data.slots[i].times.length; p++) {
          if (p === classGroup) {
            classTime = data.slots[i].times[p];
          }
        }
      }
    }
  
    response.json("The specific class is " + className + " and details on this class: \\n\\n" + 
    "a. The teacher of the class is: " + teacherName + "\\n" + 
    "b. The students in this class are: " + students + "\\n" +
    "c. Time and Day of class: " + classTime + "\\n" +
    "d. The classroom number is: " + classNumber);
});

/*
3. School of Interaction Arts Brief
*/
app.get('/api/brief/:id', (request, response) => {
    var id = request.params.id;
    var brief;

    for (var i = 0; i < data.briefs.length; i++) {
        if (data.briefs[i].id === parseInt(id)) {
            brief = data.briefs[i].name;
            response.json("The brief is: " + brief);
        } else {
            response.json("The brief does not exist");
        }
    }
});

/*
4. The Subject
*/
app.get('/api/classes/:subject', (request, response) => {
    var subject = request.params.subject;

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].subject == request.toLower) {
            response.json("The subject is: " + subject);
        } else {
            response.json("The subject does not exist");
        }
    }
});

/*
5. A list of classes taught by a particular teacher
*/
app.get('/api/teachers/:id/classes', (request, response) => {
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
app.get('/api/learners/:id/classes', (request, response) => {
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
app.get('/api/teachers/:id/:email/:password', (request, response) => {
    var id = request.params.id;
    var email = request.params.email;
    var password = request.params.password;
    
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id) && data.teachers[i].email === email && data.teachers[i].password === password ) {
            response.json("Email and Password for teacher with ID: " + id);
        } else {
            response.json("The user email and password are incorrect for user with ID: " + id);
        }
    }
});

app.get('/home', (request, response) => {
    response.redirect(301, '/');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});