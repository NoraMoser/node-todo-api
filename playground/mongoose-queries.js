const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const{User} = require('./../server/models/users')

// var id = "5ae7374848f0e82136f035a4";

var id = "5ad8c129c511366c29debc43";

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log("todo by id", todo);
// }).catch((e) => console.log(e));


User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log("User by id", user);
  })
  .catch(e => console.log(e));