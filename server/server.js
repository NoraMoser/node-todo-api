var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
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

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var createUser = new User({
    name: "Nora",
    email: "whatever@whatever.com"
})

createUser.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('will not work')
});