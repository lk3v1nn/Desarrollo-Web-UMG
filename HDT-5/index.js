const express = require('express');
const morgan = require('morgan')
const rutas = require('./routes')

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(rutas)

const puerto = 4000;
app.listen(puerto, () => {
    console.log(`Servidor iniciado en puerto ${puerto}`);
});