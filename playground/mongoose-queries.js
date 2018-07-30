const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '5b50e24c4f330408146e4e1b';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(`Todos ${todos}`);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo ${todo}`);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log(`Todo By Id ${todo}`);
// }).catch((e) => {
//   console.log(e);
// });


User.findById('5b520cece0d909377c5ec7d9').then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
// User.findById
// user not found
// user found => print
// print all errors
