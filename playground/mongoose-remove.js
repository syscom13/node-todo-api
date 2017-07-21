const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('59722a93b59fc1c524f61356').then(doc => {
//     console.log(doc);
// });

// Todo.findOneAndRemove({_id: ''}).then(doc => {

// });
