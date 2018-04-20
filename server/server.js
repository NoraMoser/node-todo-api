var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var { Todo } = require('./models/todos')
var { User } = require('./models/users')


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

app.listen(3000, () => {
    console.log('Started on port 3000')
});

// var newTodo = new Todo({
//     text: 'Eat dinner',
//     completed: false,
//     completedAt: Date.now()
// })

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save')
// });

// var newTodo = new Todo({
//     text: 'Make lunch',
//     completed: false,
//     completedAt: Date.now()
// })

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save')
// });

// var otherTodo = new Todo({
//     text: ' Edit this video '
// })

// otherTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('will not work')
// });

// var createUser = new User({
//     name: "Nora",
//     email: "whatever@whatever.com"
// })

// createUser.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('will not work')
// });