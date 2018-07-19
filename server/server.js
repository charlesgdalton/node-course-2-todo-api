var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/31893819
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(todo) {
      res.send({todo});
    }
    else {
      res.status(404).send();
    }
  }).catch((e) => {
    res.status(400).send();
  });

  // valid id using isValid
    // 404 - send back empty send

  // findById
   // success case
     // if todo - send it back
     // if no todo - send back 404 with empty body
   // error
     // 400 - send back empty body back
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
