const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5970de98cce1aa1a0c6ed35311';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('ID not found');
//     }
//     console.log('Todo by ID: ', todo)
// }).catch((e) => {
//     console.log(e);
// });
id = '5970f170f05fb08b0fc8a523';

if (!ObjectID.isValid(id)) {
    console.log('ID is unvalid')
}

User.findById(id).then((user) => {
    if (!user) return console.log('User not found');
    console.log('User: ', user)
}).catch(e => console.log(e));