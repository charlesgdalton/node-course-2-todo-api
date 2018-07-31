var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://charlesdalton:paris250@ds018498.mlab.com:18498/node-todo-api'||
'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };
