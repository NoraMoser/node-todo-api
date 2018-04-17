var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')


var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
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

var newTodo = new Todo({
    text: 'Make lunch',
    completed: false,
    completedAt: Date.now()
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save')
});