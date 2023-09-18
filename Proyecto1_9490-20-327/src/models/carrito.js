const {Schema, model} = require('mongoose');

const carritoSchema = new Schema({
    Productos : Object,
    Total : Number
});

const carrito = model('carrito', carritoSchema);

module.exports = carrito;