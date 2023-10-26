const {Schema, model} = require('mongoose');

const carritoSchema = new Schema({
    id_user: String,
    producto : String,
    cantidad : String
});

const carrito = model('carrito', carritoSchema);

module.exports = carrito;