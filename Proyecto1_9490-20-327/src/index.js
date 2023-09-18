const express = require ('express')
const rutasUsuario = require('./controllers/rutasUsuario')
const rutasProducto = require('./controllers/rutasProducto')
const rutasCarrito = require ('./controllers/rutasCarrito')
const rutasCompra = require('./controllers/rutasCompra')
const DB_UMG = require("./baseDeDatos");

const app = express();

app.use(express.json());

app.use(rutasUsuario);
app.use(rutasProducto);
app.use(rutasCarrito);
app.use(rutasCompra);

app.listen(3000, ()=>{
    console.log('Servidor iniciado en puerto 3000');
})