const express = require("express");
const rutas = require('./controllers/rutas')

const app = express();

app.use(express.json()); //para que el server entienda json y lo convierta a objetos js
app.use(express.urlencoded({extended: false})); //para que el server entienda datos de formulario y lo convierta a objetos js

app.use(rutas);

app.listen(3000, () => console.log("Servidor iniciado en puerto 3000"));

