const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    "usuario" : String,
    "clave" : String
})

const user = model('users', userSchema);

module.exports = user;